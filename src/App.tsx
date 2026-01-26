import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import ContactModal from "./components/ContactModal";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import WhatsAppButton from "./components/WhatsAppButton";
import VCard from "./pages/VCard";

// Hook to detect mobile screen (width < 768px)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

function App() {
  const location = useLocation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleOpenContact = (e: any) => {
      if (e.detail && e.detail.subject) {
        setModalSubject(e.detail.subject);
      } else {
        setModalSubject("");
      }
      setIsContactModalOpen(true);
    };
    window.addEventListener('open-contact-modal', handleOpenContact);
    return () => window.removeEventListener('open-contact-modal', handleOpenContact);
  }, []);

  const isVCardPage = location.pathname === '/vcard';

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <div className="min-h-screen font-sans text-gray-100 flex flex-col bg-background">
        {!isMobile && !isVCardPage && <Preloader />}
        {!isVCardPage && <CustomCursor />}
        {!isVCardPage && <Navbar />}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          prefilledSubject={modalSubject}
        />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/legal" element={<PageTransition><Legal /></PageTransition>} />
              <Route path="/vcard" element={<VCard />} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        {!isVCardPage && <Footer />}
        {!isVCardPage && <WhatsAppButton />}
      </div>
    </MotionConfig>
  );
}

export default App;
