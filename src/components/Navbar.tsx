import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "À propos", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                    ? "py-4"
                    : "py-8"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className={`relative flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-700 ${scrolled
                        ? "bg-surface/95 md:bg-surface/40 md:backdrop-blur-2xl border border-white/10 shadow-2xl"
                        : "bg-transparent border border-transparent"}`}
                    >
                        <Link to="/" className="relative z-10 group">
                            <span
                                className="text-3xl tracking-tight text-white group-hover:text-primary transition-colors italic"
                                style={{ fontFamily: 'var(--font-logo)', fontWeight: 900 }}
                            >
                                LOLLY<span className="text-primary group-hover:text-white">.</span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative transition-colors font-bold text-[10px] uppercase tracking-[0.2em] group py-2"
                                >
                                    <span className={`relative z-10 transition-colors ${isActive(link.href) ? "text-primary" : "text-gray-400 group-hover:text-white"}`}>
                                        {link.name}
                                    </span>
                                    {isActive(link.href) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                                        />
                                    )}
                                </Link>
                            ))}
                            <div className={location.pathname === '/contact' ? "invisible pointer-events-none" : ""}>
                                <Button
                                    className="h-10 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10"
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                                >
                                    Lancer un projet
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? <X key="x" size={20} /> : <Menu key="menu" size={20} />}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            className="fixed inset-0 z-[-1] bg-black/90 flex flex-col justify-center p-10"
                        >
                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className={`text-5xl font-serif font-bold ${isActive(link.href) ? "text-primary" : "text-white"}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-10 border-t border-white/10"
                                >
                                    <Button className="w-full h-16 text-xl" onClick={() => {
                                        setIsOpen(false);
                                        window.dispatchEvent(new CustomEvent('open-contact-modal'));
                                    }}>
                                        Contactez-nous
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
