import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { Printer, Droplets, PenTool, Layout, Settings, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      icon: Printer,
      title: "Printer Repair",
      description: "Comprehensive repair for all types of mechanical and electronic failures in laser, inkjet, and thermal printers.",
      price: "$29",
      delay: 0.1
    },
    {
      icon: Droplets,
      title: "Cartridge Refill",
      description: "Environmentally friendly and cost-effective ink and toner refilling with premium quality ink.",
      price: "$15",
      delay: 0.2
    },
    {
      icon: RefreshCw,
      title: "Ink Replacement",
      description: "Quick replacement of empty cartridges with genuine OEM or high-quality compatible parts.",
      price: "$20",
      delay: 0.3
    },
    {
      icon: Layout,
      title: "Installation & Setup",
      description: "Full configuration of new printers, driver installation, and wireless network connectivity setup.",
      price: "$39",
      delay: 0.4
    },
    {
      icon: Settings,
      title: "Annual Maintenance",
      description: "Regular cleaning and check-ups to prevent breakdowns and extend your printer's life.",
      price: "$99/yr",
      delay: 0.5
    },
    {
      icon: ShieldCheck,
      title: "Diagnostics",
      description: "In-depth testing to identify hidden issues before they become major problems.",
      price: "FREE",
      delay: 0.6
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Our <span className="gradient-text">Expertise</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From simple cartridge swaps to complex motherboard repairs, our certified technicians handle it all with precision and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Need Urgent Repair?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              We offer emergency onsite repair services for businesses and individuals. Get your printer back online today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+1234567890"
                className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all border border-blue-500"
              >
                Talk to Technician
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
