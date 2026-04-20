import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, price, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="glass group p-8 rounded-[32px] hover:bg-white/[0.07] transition-all duration-500 border border-white/10 hover:border-blue-500/30"
    >
      <div className="bg-blue-600/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
      {price && (
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Starting from</span>
          <span className="text-xl font-bold text-blue-400">{price}</span>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
