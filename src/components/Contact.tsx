"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, MessageSquare, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSent(false);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setErrorMessage("Please set a valid Web3Forms Access Key in your .env.local file.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 select-none">
      
      {/* Title Header */}
      <div className="space-y-4 relative mb-6 shrink-0">
        <h2 className="font-sans text-xl lg:text-3xl font-bold text-white tracking-wide">
          Contact
        </h2>
        <div className="w-10 h-1 bg-gold-gradient rounded-full shadow-[0_0_8px_#f2c542]" />
      </div>

      {/* Two Column Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Map & Direct Info Card (Span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Styled Mock Map / Location Frame - Decreased height & made horizontal */}
          <div className="relative w-full h-[100px] rounded-2xl overflow-hidden border border-[#2d2d2f] bg-[#1e1e1f]/40 flex items-center justify-start px-5 shadow-md shrink-0">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            {/* Glowing location waves */}
            <div className="absolute left-6 w-[120px] h-[120px] rounded-full bg-gold-300/5 blur-[35px]" />
            
            {/* Pinned map details box */}
            <div className="relative flex items-center gap-4.5 z-10">
              <div className="p-2.5 bg-[#2a2a2c] border border-[#353537] text-gold-300 rounded-xl shadow-md shrink-0">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <h3 className="font-sans font-bold text-xs text-white">Karur, Tamil Nadu, India</h3>
                <p className="font-sans text-[10px] text-gray-500 mt-0.5">B.Tech Student Workspace | AI & DS Lab</p>
              </div>
            </div>
          </div>

          {/* Quick Contacts Panel */}
          <div className="bg-[#222224]/50 border border-[#2d2d2f] p-6 lg:p-7 rounded-2xl flex flex-col gap-6 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
            <h4 className="font-sans text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0 border-b border-white/5 pb-3">
              Direct Contact Details
            </h4>
            
            <div className="space-y-6 pt-2">
              {/* Email item */}
              <div className="flex items-center gap-4 text-xs">
                <div className="p-3 bg-[#2a2a2c] border border-[#353537] rounded-xl text-gold-300 shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-wider">Email Address</p>
                  <a
                    href="mailto:nithyashreegopal2006@gmail.com"
                    className="text-xs sm:text-xs xl:text-sm text-gray-200 hover:text-gold-300 transition-colors font-medium break-all block mt-1"
                  >
                    nithyashreegopal2006@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-4 text-xs">
                <div className="p-3 bg-[#2a2a2c] border border-[#353537] rounded-xl text-gold-300 shrink-0 shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-bold uppercase tracking-wider">Phone Number</p>
                  <a
                    href="tel:+919566683690"
                    className="text-xs sm:text-xs xl:text-sm text-gray-200 hover:text-gold-300 transition-colors font-medium block mt-1"
                  >
                    +91 95666 83690
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form (Span 6) */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="bg-[#222224]/50 border border-[#2d2d2f] p-5 lg:p-6 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex flex-col gap-4"
          >
            <div className="space-y-4">
              <h3 className="font-sans text-xs lg:text-sm font-bold text-white tracking-wide flex items-center gap-2 mb-1 shrink-0">
                <MessageSquare size={15} className="text-gold-300" />
                <span>Contact Form</span>
              </h3>

              {/* Grid for Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full font-sans text-xs text-white p-3.5 bg-[#1a1a1b]/30 border border-[#353537] rounded-xl outline-none transition-colors placeholder:text-gray-600 focus:border-gold-300"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full font-sans text-xs text-white p-3.5 bg-[#1a1a1b]/30 border border-[#353537] rounded-xl outline-none transition-colors placeholder:text-gray-600 focus:border-gold-300"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col min-h-[140px] lg:min-h-[160px] pt-1">
                <textarea
                  required
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full h-full flex-grow font-sans text-xs text-white p-3.5 bg-[#1a1a1b]/30 border border-[#353537] rounded-xl outline-none resize-none transition-colors placeholder:text-gray-600 focus:border-gold-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-1 shrink-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 bg-[#252527] hover:bg-[#f2c542]/10 border border-[#353537] hover:border-[#f2c542] text-gold-300 hover:text-[#f2c542] font-semibold text-xs py-2.5 px-4.5 rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Success Notifier */}
            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 bg-gold-950/20 border border-gold-400/20 rounded-xl text-center shrink-0"
              >
                <p className="text-xs text-gold-300 font-medium">
                  Message sent successfully! Thank you.
                </p>
              </motion.div>
            )}

            {/* Error Notifier */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 bg-red-950/25 border border-red-500/20 rounded-xl text-center shrink-0"
              >
                <p className="text-xs text-red-400 font-medium">
                  {errorMessage}
                </p>
              </motion.div>
            )}
          </form>
        </div>

      </div>

    </div>
  );
}
