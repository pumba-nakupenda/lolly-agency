"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTop from "./ScrollToTop";


export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [modalSubject, setModalSubject] = useState("");
    useEffect(() => {
        const handleOpenContact = (e: any) => {
            if (e.detail && e.detail.subject) {
                setModalSubject(e.detail.subject);
            } else {
                setModalSubject("");
            }
            setIsContactModalOpen(true);
        };
        window.addEventListener("open-contact-modal", handleOpenContact);
        return () =>
            window.removeEventListener("open-contact-modal", handleOpenContact);
    }, []);

    const isVCardPage = pathname?.toLowerCase().startsWith("/vcard");

    return (
        <MotionConfig>
            <div className="min-h-screen font-sans text-gray-100 flex flex-col bg-background">
                {!isVCardPage && <Navbar />}
                <ScrollToTop />
                <ContactModal
                    isOpen={isContactModalOpen}
                    onClose={() => setIsContactModalOpen(false)}
                    prefilledSubject={modalSubject}
                />

                <main className="flex-grow">{children}</main>

                {!isVCardPage && <Footer />}
                {!isVCardPage && <WhatsAppButton />}
            </div>
        </MotionConfig>
    );
}
