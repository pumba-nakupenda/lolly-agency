import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Download, Share2, Linkedin, Instagram, Facebook, Music2 } from "lucide-react";
import { Button } from "../components/ui/Button";

const VCard = () => {
    const contactInfo = {
        firstName: "Amadou Mbaye",
        lastName: "GUEYE",
        title: "Founder & Chief Visionary",
        company: "LOLLY SAS",
        phone: "+221772354747",
        displayPhone: "+221 77 235 47 47",
        email: "contact@lolly.sn",
        website: "https://lolly.sn",
        address: "Fass Delorme Rue 22x13, Dakar, Sénégal",
        avatar: "/assets/amadou-mbaye-gueye.jpg",
        socials: [
            { icon: Linkedin, url: "https://www.linkedin.com/company/lolly-sas" },
            { icon: Instagram, url: "https://www.instagram.com/agence_lolly/" },
            { icon: Facebook, url: "https://www.facebook.com/AGENCELOLLY" },
            { icon: Music2, url: "https://www.tiktok.com/@agence_lolly" }
        ]
    };

    const generateVCard = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
N:${contactInfo.lastName};${contactInfo.firstName};;;
FN:${contactInfo.firstName} ${contactInfo.lastName}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR;TYPE=WORK:;;${contactInfo.address};;;;
END:VCARD`;

        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "amadou_mbaye_gueye.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${contactInfo.firstName} ${contactInfo.lastName} - ${contactInfo.company}`,
                    text: `Voici la carte de visite digitale de ${contactInfo.firstName} ${contactInfo.lastName}, ${contactInfo.title} chez ${contactInfo.company}.`,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert("Lien copié dans le presse-papier !");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-surface/30 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden relative z-10 shadow-2xl"
            >
                {/* Header Image / Banner */}
                <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10" />
                </div>

                {/* Profile Picture */}
                <div className="px-8 relative -mt-16 text-center">
                    <div className="w-32 h-32 mx-auto rounded-[2rem] p-1.5 bg-background border border-white/10 relative shadow-xl">
                        <img
                            src={contactInfo.avatar}
                            alt={contactInfo.firstName}
                            className="w-full h-full object-cover rounded-[1.5rem]"
                        />
                        <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-black rounded-full" />
                    </div>

                    <div className="mt-6 space-y-1">
                        <h1 className="text-2xl font-bold text-white tracking-tight">{contactInfo.firstName} {contactInfo.lastName}</h1>
                        <p className="text-primary font-bold text-xs uppercase tracking-widest">{contactInfo.title}</p>
                        <p className="text-gray-400 text-sm">{contactInfo.company}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="px-8 py-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            className="w-full h-12 rounded-xl font-bold text-sm shadow-lg shadow-primary/20"
                            onClick={generateVCard}
                        >
                            <Download size={16} className="mr-2" />
                            Sauvegarder
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl font-bold text-sm border-white/10 hover:bg-white/5"
                            onClick={handleShare}
                        >
                            <Share2 size={16} className="mr-2" />
                            Partager
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <a href={`tel:${contactInfo.phone}`} className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Phone size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Mobile</p>
                                <p className="text-white font-medium">{contactInfo.displayPhone}</p>
                            </div>
                        </a>

                        <a href={`mailto:${contactInfo.email}`} className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Email</p>
                                <p className="text-white font-medium">{contactInfo.email}</p>
                            </div>
                        </a>

                        <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <Globe size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Site Web</p>
                                <p className="text-white font-medium">lolly.sn</p>
                            </div>
                        </a>

                        <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 transition-all">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Adresse</p>
                                <p className="text-white font-medium text-sm">{contactInfo.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center gap-4 pt-4 border-t border-white/5">
                        {contactInfo.socials.map((social, i) => (
                            <a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/5 hover:bg-primary hover:text-black rounded-full flex items-center justify-center transition-all"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Branding Footer */}
                <div className="bg-black/40 py-4 text-center">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Powered by LOLLY Agency</p>
                </div>
            </motion.div>
        </div>
    );
};

export default VCard;
