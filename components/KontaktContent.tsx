'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Kedenburgstraße 44", "22043 Hamburg", "Deutschland"],
    link: "https://maps.google.com/?q=Kedenburgstraße+44,+22043+Hamburg"
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+49 30 123 456 789"],
    link: "tel:+4930123456789"
  },
  {
    icon: Mail,
    title: "E-Mail",
    details: ["info@nextmove-digital.de"],
    link: "mailto:info@nextmove-digital.de"
  },
  {
    icon: Clock,
    title: "Bürozeiten",
    details: ["Mo - Fr: 09:00 - 18:00", "Sa - So: Nach Vereinbarung"],
    link: null
  }
];

const quickActions = [
  {
    icon: Calendar,
    title: "Kostenloses Strategiegespräch",
    description: "Buchen Sie direkt einen Termin für eine unverbindliche Beratung",
    action: "Termin buchen",
    color: "orange"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Kontakt",
    description: "Schreiben Sie uns direkt über WhatsApp für schnelle Antworten",
    action: "WhatsApp öffnen",
    color: "green"
  },
  {
    icon: Send,
    title: "Projekt anfragen",
    description: "Beschreiben Sie Ihr Projekt und erhalten Sie ein individuelles Angebot",
    action: "Anfrage senden",
    color: "blue"
  }
];

export default function KontaktContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'leadgenerierung'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Formular-Verarbeitung stattfinden
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns binnen 24 Stunden bei Ihnen.');
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/4930123456789?text=Hallo%20NextMove%20Team,%20ich%20interessiere%20mich%20für%20Ihre%20Dienstleistungen', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative bg-black py-16 sm:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[120px] animate-pulse-orange"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 filter blur-[120px] animate-pulse-orange" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-montserrat">
            Kontakt zu <span className="relative">
              <span className="relative z-10 text-[#ff5500]">NextMove</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Bereit für den nächsten Schritt? Kontaktieren Sie uns für eine unverbindliche Beratung und 
            entdecken Sie, wie wir Ihr Business auf das nächste Level bringen können.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out text-center">
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl flex items-center justify-center group-hover:border-orange-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#ff5500] group-hover:text-[#ff8040] transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                      {action.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {action.description}
                    </p>
                    
                    {/* Action Button */}
                    <button
                      onClick={index === 0 ? handleCalendlyClick : index === 1 ? handleWhatsAppClick : () => {}}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-lg hover:bg-orange-500/30 hover:text-orange-300 transition-all duration-300"
                    >
                      {action.action}
                    </button>
                  </div>

                  {/* Outer glow effect */}
                  <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-8">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-[#ff5500] group-hover:text-[#ff8040] transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 text-sm">
                            {info.link && detailIndex === 0 ? (
                              <a 
                                href={info.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-orange-400 transition-colors duration-300"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <h3 className="text-white font-medium mb-4">Folgen Sie uns</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/nextmove-consulting' },
                    { name: 'Instagram', url: 'https://www.instagram.com/nextmove_consulting' },
                    { name: 'Facebook', url: 'https://www.facebook.com/nextmove-digital' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/[0.08] border border-white/[0.08] rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/20 transition-all duration-300"
                    >
                      <span className="text-sm font-medium">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)]">
              <h2 className="text-2xl font-semibold text-white mb-8">Nachricht senden</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      placeholder="ihre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Unternehmen</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300"
                  >
                    <option value="leadgenerierung">Lead-Generierung</option>
                    <option value="webdesign">Webdesign & Landingpages</option>
                    <option value="funnel">Funnel-Systeme</option>
                    <option value="content">Content Marketing</option>
                    <option value="linkedin">LinkedIn Automation</option>
                    <option value="branding">Personal Branding</option>
                    <option value="beratung">Strategieberatung</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Nachricht *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}