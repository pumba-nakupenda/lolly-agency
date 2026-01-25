import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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

function App() {
  const location = useLocation();
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
    window.addEventListener('open-contact-modal', handleOpenContact);
    return () => window.removeEventListener('open-contact-modal', handleOpenContact);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-100 flex flex-col bg-background">
      <Preloader />
      <CustomCursor />
      <Navbar />
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
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
