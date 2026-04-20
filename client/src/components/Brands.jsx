import { motion } from 'framer-motion';

const Brands = () => {
  const brandStyles = [
    { name: 'HP', className: 'font-bold italic text-2xl sm:text-3xl md:text-5xl font-sans opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'Canon', className: 'font-bold text-2xl sm:text-3xl md:text-5xl tracking-tighter opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'EPSON', className: 'font-black text-2xl sm:text-3xl md:text-5xl tracking-widest font-sans opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'brother', className: 'font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'SAMSUNG', className: 'font-black text-2xl sm:text-3xl md:text-5xl tracking-[0.1em] opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'DELL', className: 'font-bold text-xl sm:text-2xl md:text-4xl border-2 md:border-[3px] border-white rounded-full px-4 md:px-6 py-1 md:py-2 opacity-70 hover:opacity-100 transition-all' },
    { name: 'Xerox', className: 'font-black text-2xl sm:text-3xl md:text-5xl font-sans tracking-tight opacity-70 hover:opacity-100 transition-opacity' },
    { name: 'Lexmark', className: 'font-bold text-2xl sm:text-3xl md:text-5xl font-serif tracking-widest opacity-70 hover:opacity-100 transition-opacity' },
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const repeatedBrands = [...brandStyles, ...brandStyles, ...brandStyles];

  return (
    <div className="py-12 md:py-24 border-y border-white/5 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16 relative z-10">
        <p className="text-center text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm lg:text-base drop-shadow-lg">
          We Support All Major Brands
        </p>
      </div>

      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <div className="animate-marquee flex gap-8 sm:gap-16 md:gap-32 items-center whitespace-nowrap min-w-full">
          {repeatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className={`text-slate-300 select-none flex items-center justify-center shrink-0 ${brand.className}`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
