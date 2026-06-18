"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroThree() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Detect WebGL capability
    const detectWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!detectWebGL()) {
      setTimeout(() => {
        setHasWebGL(false);
      }, 0);
      return;
    }

    let animationFrameId: number;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize coordinate: range [-1, 1]
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight;

    // Create scene & setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    // Position camera slightly above and tilted down to view waves in 3D perspective
    camera.position.set(0, 3.5, 7);
    camera.lookAt(0, -0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    const clock = new THREE.Clock();

    // Create custom particle circle texture programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.3, "rgba(212, 175, 55, 0.8)");
        grad.addColorStop(0.7, "rgba(189, 146, 41, 0.2)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(8, 8, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Instantiate wave particle coordinates (amountX x amountY grid)
    const amountX = 50;
    const amountY = 50;
    const gap = 0.25; // gap between particles
    const particleCount = amountX * amountY;
    
    const positions = new Float32Array(particleCount * 3);

    let i = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        // Center the grid coordinates on the x and z plane
        const x = ix * gap - (amountX * gap) / 2;
        const z = iy * gap - (amountY * gap) / 2;

        positions[i] = x;
        positions[i + 1] = 0; // Y coordinate starts at 0, animated dynamically
        positions[i + 2] = z;

        i += 3;
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Material with additive blending
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#d4ab37"),
      size: 0.055,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createCircleTexture(),
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4ab37, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation ticker loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Elastic mouse follow interpolation
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Rotate/tilt the grid camera view slightly based on cursor
      particles.rotation.y = targetX * 0.12;
      particles.rotation.x = -0.15 + targetY * 0.08;

      // Animate wave grid heights
      const posArr = particleGeometry.attributes.position.array as Float32Array;
      let index = 0;

      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          const x = posArr[index];
          const z = posArr[index + 2];

          // Dual sine-wave formulas creating intersecting fluid ripples
          const wave1 = Math.sin(ix * 0.15 + elapsedTime * 1.2) * 0.22;
          const wave2 = Math.cos(iy * 0.15 + elapsedTime * 0.9) * 0.22;
          
          // Mouse proximity ripple distortion: mapping screen mouse position to grid space
          // Map mouse coordinates to area of grid: width roughly 12 units
          const mouseGridX = targetX * 5.0;
          const mouseGridZ = -targetY * 5.0;
          
          const dx = x - mouseGridX;
          const dz = z - mouseGridZ;
          const dist = Math.sqrt(dx * dx + dz * dz);
          
          // Ripple expands outwards from mouse coords
          const mouseRipple = Math.sin(dist * 0.9 - elapsedTime * 2.5) * Math.max(0, 0.55 - dist * 0.12);

          // Apply calculated Y height
          posArr[index + 1] = wave1 + wave2 + mouseRipple;

          index += 3;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountNode) return;
      const w = mountNode.clientWidth;
      const h = mountNode.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Elegant background grid with animated linear gradient mesh fallback
    return (
      <div className="absolute inset-0 bg-bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gold-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-gold-400/5 blur-[120px] animate-pulse" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-60 z-0 bg-transparent"
    />
  );
}
