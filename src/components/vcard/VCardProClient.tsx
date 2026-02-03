"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Download, Share2, Linkedin, Instagram, Facebook, Music2, Smartphone, QrCode, X, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useIsMobile } from "@/hooks/useIsMobile";
import OptimizedImage from "../OptimizedImage";

const VCardProClient = () => {
    const isMobile = useIsMobile();
    const [showQrCode, setShowQrCode] = useState(false);

    const contactInfo = {
        name: "LOLLY Agence",
        title: "Agence de Conseil en Communication",
        phone: "+221772354747",
        displayPhone: "+221 77 235 47 47",
        email: "contact@lolly.sn",
        website: "https://lolly.sn",
        address: "Fass Delorme Rue 22x13, Dakar, Sénégal",
        logo: "/assets/logos/logo_white.png",
        bio: "Nous accompagnons les entreprises et institutions dans leur stratégie et leur transformation digitale au Sénégal et en Afrique.",
        googleReviewUrl: "https://www.google.com/search?q=LOLLY+Agence+Dakar+avis",
        socials: [
            { icon: Linkedin, url: "https://www.linkedin.com/company/lolly-sas" },
            { icon: Instagram, url: "https://www.instagram.com/agence_lolly/" },
            { icon: Facebook, url: "https://www.facebook.com/AGENCELOLLY" },
            { icon: Music2, url: "https://www.tiktok.com/@agence_lolly" }
        ]
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: contactInfo.name,
                    text: `Contactez l'agence LOLLY : ${contactInfo.title}`,
                    url: window.location.href
                });
            } catch (error) {
                // User cancelled or failure
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Lien copié !");
        }
    };

    if (!isMobile) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="text-center space-y-4 max-w-md">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                        <Smartphone size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Version Mobile Uniquement</h1>
                    <p className="text-gray-300">Cette carte digitale est optimisée pour mobile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-surface/30 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden relative z-10 shadow-2xl"
            >
                <div className="h-40 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center p-10 relative">
                    <OptimizedImage src={contactInfo.logo} alt={contactInfo.name} height={40} width={180} className="w-auto h-12 object-contain" />
                    <button onClick={() => setShowQrCode(true)} className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <QrCode size={18} />
                    </button>
                </div>

                <div className="px-8 pb-10 pt-8 text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-white tracking-tight">{contactInfo.name}</h1>
                        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">{contactInfo.title}</p>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">{contactInfo.bio}</p>

                    <div className="grid grid-cols-2 gap-4">
                        <Button className="w-full h-12 rounded-xl font-bold text-sm shadow-lg shadow-primary/20" onClick={handleShare}>
                            <Share2 size={16} className="mr-2" /> Partager
                        </Button>
                        <a href={contactInfo.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full h-12 rounded-xl font-bold text-sm border-primary/20 text-primary hover:bg-primary/10">
                                <Star size={16} className="mr-2 fill-primary" /> Avis Google
                            </Button>
                        </a>
                    </div>

                    <div className="space-y-4 text-left">
                        <a href={`tel:${contactInfo.phone}`} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 group">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Appeler</p>
                                <p className="text-white font-medium">{contactInfo.displayPhone}</p>
                            </div>
                        </a>

                        <a href={`mailto:${contactInfo.email}`} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 group">
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Email</p>
                                <p className="text-white font-medium">{contactInfo.email}</p>
                            </div>
                        </a>

                        <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 group">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform"><Globe size={20} /></div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Site Web</p>
                                <p className="text-white font-medium">lolly.sn</p>
                            </div>
                        </a>

                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 group">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest">Adresse</p>
                                <p className="text-white font-medium text-sm">{contactInfo.address}</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center gap-4 pt-4 border-t border-white/5">
                        {contactInfo.socials.map((social, i) => (
                            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-primary hover:text-black rounded-full flex items-center justify-center transition-all">
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showQrCode && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowQrCode(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-surface border border-white/10 p-8 rounded-[2.5rem] relative z-10 w-full max-w-xs text-center shadow-2xl">
                            <button onClick={() => setShowQrCode(false)} className="absolute top-4 right-4 text-gray-300 hover:text-white"><X size={20} /></button>
                            <h3 className="text-xl font-bold text-white mb-6">QR Code Agence</h3>
                            <div className="bg-white p-4 rounded-2xl inline-block mx-auto mb-6">
                                <OptimizedImage src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} alt="QR Code" width={200} height={200} />
                            </div>
                            <p className="text-sm text-gray-300">Scannez pour partager l'agence</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VCardProClient;
