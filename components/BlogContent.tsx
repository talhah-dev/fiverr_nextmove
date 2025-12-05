'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const featuredPost = {
  id: 1,
  title: "Die 5 größten Fehler bei der Lead-Generierung für Finanzberater",
  excerpt: "Erfahren Sie, welche kostspieligen Fehler die meisten Finanzberater bei der digitalen Kundengewinnung machen und wie Sie diese vermeiden können.",
  content: "In der heutigen digitalen Welt ist die Lead-Generierung für Finanzberater komplexer geworden...",
  author: "Ali Siar",
  date: "2025-01-30",
  readTime: "8 Min.",
  image: "/blog-hero.webp",
  category: "Lead-Generierung",
  featured: true
};

const blogPosts = [
  {
    id: 2,
    title: "LinkedIn Automation: Der Game-Changer für Immobilienmakler",
    excerpt: "Wie Sie mit intelligenter LinkedIn-Automation täglich neue, qualifizierte Kontakte generieren.",
    author: "NextMove Team",
    date: "2025-01-28",
    readTime: "6 Min.",
    image: "/linkedin-automation.webp",
    category: "Social Media"
  },
  {
    id: 3,
    title: "Conversion-Rate optimieren: 7 bewährte Strategien",
    excerpt: "Diese 7 Techniken steigern Ihre Conversion-Rate um durchschnittlich 40% - ohne zusätzliche Werbekosten.",
    author: "Ali Siar",
    date: "2025-01-25",
    readTime: "10 Min.",
    image: "/conversion-optimization.webp",
    category: "Optimierung"
  },
  {
    id: 4,
    title: "Personal Branding für Finanzberater: Der ultimative Guide",
    excerpt: "Schritt-für-Schritt Anleitung zum Aufbau einer starken Personal Brand in der Finanzbranche.",
    author: "NextMove Team",
    date: "2025-01-22",
    readTime: "12 Min.",
    image: "/personal-branding.webp",
    category: "Branding"
  },
  {
    id: 5,
    title: "ROI-Tracking: Messen Sie den Erfolg Ihrer Marketing-Kampagnen",
    excerpt: "Lernen Sie die wichtigsten KPIs kennen und wie Sie den ROI Ihrer Marketing-Aktivitäten korrekt berechnen.",
    author: "Ali Siar",
    date: "2025-01-20",
    readTime: "7 Min.",
    image: "/roi-tracking.webp",
    category: "Analytics"
  },
  {
    id: 6,
    title: "Funnel-Optimierung: Mehr Leads zu zahlenden Kunden machen",
    excerpt: "Entdecken Sie die bewährtesten Techniken zur Optimierung Ihrer Sales-Funnels für maximale Conversion.",
    author: "NextMove Team",
    date: "2025-01-18",
    readTime: "9 Min.",
    image: "/funnel-optimization.webp",
    category: "Conversion"
  }
];

const categories = ["Alle", "Lead-Generierung", "Social Media", "Optimierung", "Branding", "Analytics", "Conversion"];

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "Alle") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === category));
    }
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
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white font-montserrat">
            NextMove <span className="relative">
              <span className="relative z-10 text-[#ff5500]">Blog</span>
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Insights, Strategien und bewährte Praktiken für erfolgreiches digitales Marketing in der Finanzbranche.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.01] hover:border-white/[0.12] transition-all duration-500 ease-out group">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Featured Post Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Featured Article</p>
                  </div>
                </div>
              </div>

              {/* Featured Post Content */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                    FEATURED
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('de-DE')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 font-medium">
                    Lesen <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,85,0,0.1)] hover:shadow-[0_16px_48px_0_rgba(255,85,0,0.15)] hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-500 ease-out">
                
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Post Image Placeholder */}
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-800/50 to-gray-900/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <p className="text-gray-500 text-xs">Blog Image</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Post Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  {/* Post Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                  </div>
                  
                  {/* Read More Button */}
                  <div className="mt-4">
                    <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 text-sm font-medium">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Outer glow effect */}
                <div className="hidden md:block absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Coming Soon Message */}
        {filteredPosts.length === 0 && selectedCategory !== "Alle" && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 text-lg">
              Beiträge in der Kategorie "{selectedCategory}" kommen bald...
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}