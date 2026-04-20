import { motion } from 'framer-motion';
import { ChevronRight, Phone, Printer, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Fast & Reliable Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Fast & Reliable <br />
              <span className="gradient-text">Printer Repair</span> <br />
              at Your Doorstep
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              We provide professional repair services for all major printer brands. HP, Canon, Epson, and more. Certified technicians, genuine parts, and same-day service.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/book"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                <span>Book Service</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="mt-10 flex items-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Certified Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-sm">90-Day Warranty</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-4">
              <div className="glass rounded-[40px] p-8 relative overflow-hidden group">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800" 
                    alt="Printer Repair" 
                    className="rounded-[30px] shadow-2xl transition-transform group-hover:scale-105 duration-700"
                  />
                </motion.div>
                
                {/* Floating card */}
                <motion.div 
                  initial={{ x: 20, y: 20 }}
                  animate={{ x: [20, 10, 20], y: [20, 30, 20] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-10 -right-10 glass p-5 rounded-2xl shadow-xl border border-white/20 w-48"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <Zap className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-300">Quick Fix</span>
                  </div>
                  <div className="text-sm font-medium">HP Laserjet Pro</div>
                  <div className="text-[10px] text-slate-500">Repaired in 45 mins</div>
                </motion.div>
              </div>
            </div>
            
            {/* Background decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-500/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
