import { motion } from "framer-motion";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                    className="text-7xl md:text-9xl font-logo font-black text-white tracking-tighter opacity-50"
                >
                    LOLLY<span className="text-primary">.</span>
                </motion.div>

                <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-px bg-primary/30 mt-8 origin-center"
                />
            </div>

            {/* Decorative background motion */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
            />
        </div>
    );
};

export default PageLoader;
