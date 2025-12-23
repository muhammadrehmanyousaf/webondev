'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

// =============================================================================
// WHATSAPP BUTTON - World-Class Premium Emerald Green Design
// =============================================================================

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-expand after 5 seconds for better engagement
  useEffect(() => {
    if (isVisible) {
      const expandTimer = setTimeout(() => {
        setIsExpanded(true);
      }, 8000);

      return () => clearTimeout(expandTimer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923106803687';
    const message = encodeURIComponent("Hi! I'd like to discuss a project with you. Can we chat?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowNotification(false);
    setIsExpanded(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setShowNotification(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          {/* Expanded Chat Preview */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-20 right-0 w-80"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Chat Card */}
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-teal-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                  <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-brand-500/20">
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-brand-600 to-teal-600 p-4">
                      {/* Background Pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: '20px 20px',
                        }}
                      />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            {/* Online Indicator */}
                            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-brand-600">
                              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-white text-base">Web On Dev</h4>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                              <span className="text-white/80 text-xs">Online now</span>
                            </div>
                          </div>
                        </div>

                        {/* Close Button */}
                        <motion.button
                          onClick={handleClose}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <X className="w-4 h-4 text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Chat Content */}
                    <div className="p-4 space-y-3">
                      {/* Message Bubble */}
                      <motion.div
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 border border-white/10 max-w-[85%]">
                          <p className="text-white/90 text-sm leading-relaxed">
                            Hey there! 👋 Looking for world-class software development? Let&apos;s chat!
                          </p>
                          <span className="text-white/40 text-xs mt-1 block">Just now</span>
                        </div>
                      </motion.div>

                      {/* Typing Indicator */}
                      <motion.div
                        className="flex items-center gap-2 pl-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-2">
                          <motion.div
                            className="w-2 h-2 bg-brand-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-brand-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-brand-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                        <span className="text-white/40 text-xs">Typing...</span>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <div className="p-4 pt-0">
                      <motion.button
                        onClick={handleWhatsAppClick}
                        className="w-full relative group/btn overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Button Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 rounded-xl blur opacity-50 group-hover/btn:opacity-75 transition-opacity" />

                        <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25">
                          {/* WhatsApp Icon */}
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          <span>Start Chat</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </motion.button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 pb-3">
                      <p className="text-center text-white/30 text-xs">
                        Typically replies within minutes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow pointing to button */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-slate-900 border-r border-b border-white/10 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            onClick={() => isExpanded ? handleWhatsAppClick() : setIsExpanded(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Multi-layer Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-teal-400 blur-md opacity-30" />

            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.5, 1.8],
                  opacity: [0.6, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.5, 1.8],
                  opacity: [0.6, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.5, 1.8],
                  opacity: [0.6, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
              />
            </div>

            {/* Button Background */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 via-green-400 to-emerald-500 shadow-2xl shadow-green-500/40 flex items-center justify-center border border-green-400/30 overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20" />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />

              {/* WhatsApp Icon */}
              <motion.svg
                className="relative w-8 h-8 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  rotate: isHovered ? [0, -10, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </motion.svg>
            </div>

            {/* Notification Badge */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  className="absolute -top-1 -right-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <div className="relative">
                    {/* Badge Glow */}
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-sm" />

                    {/* Badge */}
                    <motion.div
                      className="relative w-6 h-6 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-white text-xs font-bold">1</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Hover Tooltip (when not expanded) */}
          <AnimatePresence>
            {isHovered && !isExpanded && (
              <motion.div
                className="absolute bottom-full right-0 mb-3"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  {/* Tooltip Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-teal-500 rounded-xl blur opacity-30" />

                  <div className="relative bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-brand-400" />
                      <span className="text-white text-sm font-medium whitespace-nowrap">Chat with us</span>
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-white/10 transform rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
