import { motion } from "framer-motion";

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png"
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos, ...logos];

const ClientLogos = () => {
    return (
        <section className="py-10 md:py-16 bg-black border-y border-white/5 overflow-hidden relative z-10">
            <div className="container mx-auto px-6 mb-6 md:mb-8 text-center">
                <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Ils nous font confiance</p>
            </div>

            <div className="flex whitespace-nowrap overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                <motion.div
                    className="flex items-center space-x-12 md:space-x-20"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {allLogos.map((logo, i) => (
                        <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                            {/* Using placeholder text if images fail, but trying nice SVG logos */}
                            <img src={logo} alt="Client Logo" className="h-6 md:h-10 object-contain brightness-0 invert" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientLogos;
