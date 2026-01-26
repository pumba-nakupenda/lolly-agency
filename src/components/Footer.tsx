import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Music2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-surface/50 text-white pt-12 pb-8 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Agency Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3
                            className="text-3xl mb-4 text-primary italic"
                            style={{ fontFamily: 'var(--font-logo)', fontWeight: 900 }}
                        >
                            LOLLY
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Des mots qui touchent, des images qui marquent.
                            Nous sommes une agence de communication basée à Dakar, dédiée à propulser votre image de marque.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/lolly-sas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/agence_lolly/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/AGENCELOLLY" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@agence_lolly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <Music2 size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">Réalisations</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mt-1 mr-3 text-primary" size={18} />
                                <span className="text-gray-400">LOLLY SAS, Fass Delorme Rue 22x13, Apt 201</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 text-primary" size={18} />
                                <a href="tel:+221772354747" className="text-gray-400 hover:text-primary transition-colors">+221 77 235 47 47</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-primary" size={18} />
                                <a href="mailto:contact@lolly.sn" className="text-gray-400 hover:text-primary transition-colors">contact@lolly.sn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()} LOLLY Agency. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link to="/legal" className="hover:text-primary transition-colors">Mentions Légales</Link>
                        <Link to="/legal" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
