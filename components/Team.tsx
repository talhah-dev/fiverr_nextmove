'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// --- TypeScript-Interface für ein Teammitglied ---
interface Member {
    name: string;
    position: string;
    role: string;
    expertise: string;
    avatar: string;
}

// --- TypeScript-Interface für die Props der TeamCard ---
interface TeamCardProps {
    member: Member;
}

// Deine Team-Daten
const members: Member[] = [
    {
        name: 'Ali Alizadah',
        position: 'Geschäftsführer & Gründer',
        role: 'Visionary',
        expertise: 'Expert',
        avatar: '/ali3.webp',
    },
    {
        name: 'Siar Alizadah',
        position: 'Mitgründer & IT Berater',
        role: 'Strategic',
        expertise: 'Mastermind',
        avatar: '/siarjaan.webp',
    },
    {
        name: 'Cem Celik',
        position: 'Head of Marketing',
        role: 'Engaging',
        expertise: 'Genius',
        avatar: '/CemCelik1.webp',
    }
];

// --- Team-Karten Unterkomponente - kompakter ---
const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
    return (
        <div className="group relative flex h-[420px] lg:h-[480px] w-full max-w-sm cursor-pointer flex-col overflow-visible transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="relative h-full w-full overflow-hidden rounded-[24px] lg:rounded-[30px] bg-gray-900 transition-all duration-500 ease-in-out">
                <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="absolute inset-0 object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                    style={{
                        objectPosition: 'center 20%',
                    }}
                />
                
                <div className="absolute left-[20px] lg:left-[30px] top-[20px] lg:top-[30px] z-[3] leading-none">
                    <p className="text-3xl lg:text-4xl font-bold uppercase text-[#ff5500] transition-transform duration-500 ease-out group-hover:-translate-y-2">{member.role}</p>
                    <p className="mt-1 text-sm lg:text-base font-bold uppercase text-white opacity-0 transition-all duration-500 ease-out [transition-delay:0.1s] group-hover:opacity-70 group-hover:translate-y-0">{member.expertise}</p>
                </div>
            </div>

            <div className="relative z-10 -mt-[60px] lg:-mt-[70px] flex h-[75px] lg:h-[90px] w-full flex-col items-center justify-center gap-1 rounded-[16px] lg:rounded-[20px] bg-black/50 p-2 lg:p-2.5 backdrop-blur-md transition-transform duration-500 ease-in-out group-hover:-translate-y-2.5">
                <h3 className="text-xl lg:text-2xl font-normal text-white text-center">{member.name}</h3>
                <p className="text-sm lg:text-base text-white/70 text-center">{member.position}</p>
            </div>
        </div>
    );
};

// --- Hauptkomponente für die Seite ---
export default function TeamSection() {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
      }
    };
    
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
          type: 'spring',
          stiffness: 100 
        } 
      }
    };

    return (
        <section className="w-full overflow-x-hidden bg-black px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 lg:gap-12">
                <motion.div 
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                        Unser <span className="text-[#ff5500]">Expertenteam</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg mt-6 lg:mt-8 max-w-2xl mx-auto">
                        Wir arbeiten eng mit unseren Kunden zusammen, um sicherzustellen, dass unsere Lösungen perfekt zu ihren Anforderungen passen. Unsere Expertise garantiert messbare Ergebnisse.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid w-full grid-cols-1 gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {members.map((member) => (
                        <motion.div className="flex justify-center" key={member.name} variants={itemVariants}>
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
