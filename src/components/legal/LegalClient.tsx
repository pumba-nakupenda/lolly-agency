"use client";

import { motion } from "framer-motion";

const LegalClient = () => {
    const sections = [
        {
            title: "1. Mentions Légales",
            content: [
                "Propriétaire : LOLLY Agency",
                "Responsable : Amadou Mbaye GUEYE",
                "Siège social : LOLLY SAS, Fass Delorme Rue 22x13, Appartement 201, Dakar",
                "Contact : contact@lolly.sn | +221 77 235 47 47",
                "Hébergement : Hostinger International Ltd."
            ]
        },
        {
            title: "2. Propriété Intellectuelle",
            content: [
                "L'ensemble du contenu (textes, images, vidéos, logos) est la propriété exclusive de LOLLY Agency.",
                "Toute reproduction ou diffusion sans autorisation préalable est strictement interdite."
            ]
        },
        {
            title: "3. Protection des Données (RGPD)",
            content: [
                "Les données collectées via nos formulaires sont utilisées uniquement pour répondre à vos demandes.",
                "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en envoyant un mail à contact@lolly.sn."
            ]
        },
        {
            title: "4. Cookies",
            content: [
                "Ce site utilise des cookies techniques pour améliorer votre expérience de navigation.",
                "Aucun cookie n'est utilisé à des fins publicitaires sans votre consentement."
            ]
        }
    ];

    return (
        <div className="pt-40 pb-20 px-6 min-h-screen bg-transparent relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                        Aspects <span className="text-primary italic">Légaux</span>
                    </h1>
                    <p className="text-gray-400">Transparence et confiance au cœur de notre collaboration.</p>
                </motion.div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 bg-surface/30 backdrop-blur-md rounded-[2.5rem] border border-white/5"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                            <div className="space-y-4">
                                {section.content.map((line, j) => (
                                    <p key={j} className="text-gray-400 leading-relaxed">{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LegalClient;
