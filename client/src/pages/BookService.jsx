import { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    brand: '',
    issue: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/book-service', formData);
      setSubmitted(true);
      toast.success('Service booked successfully!');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-[40px] text-center max-w-lg"
        >
          <div className="bg-green-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Booking Successful!</h2>
          <p className="text-slate-400 text-lg mb-8">
            Thank you for choosing PrintFix Pro. Our technician will contact you within 30 minutes to confirm your appointment.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Book Another Service
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-extrabold mb-6">Book Your <br /><span className="gradient-text">Repair Service</span></h1>
              <p className="text-slate-400 text-lg mb-12">
                Fill in the details below and we'll send our expert technician to your doorstep. We repair all models of HP, Canon, Epson, Samsung and Brother.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Support 24/7", content: "+1 (234) 567-890" },
                  { icon: MapPin, title: "Our Location", content: "123 Printer Street, Tech City, PC 4567" },
                  { icon: Printer, title: "Service Areas", content: "Entire Tech City and Metro Regions" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="bg-blue-600/10 p-4 rounded-2xl">
                      <item.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300">{item.title}</h4>
                      <p className="text-slate-500">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-10 rounded-[40px] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, Building, Flat No."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Printer Brand</label>
                <select
                  required
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white appearance-none"
                >
                  <option value="" disabled>Select Brand</option>
                  <option value="HP">HP</option>
                  <option value="Canon">Canon</option>
                  <option value="Epson">Epson</option>
                  <option value="Brother">Brother</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Describe Issue</label>
                <textarea
                  required
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us what's wrong (e.g., Paper jam, Blank pages...)"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 text-lg mt-4 shadow-xl shadow-blue-900/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
