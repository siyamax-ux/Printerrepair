import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Trash2, CheckCircle, Clock, Search, AlertCircle, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bookings');
      setBookings(res.data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple check
      setIsAuthenticated(true);
      toast.success('Welcome back, Admin');
    } else {
      toast.error('Invalid password');
    }
  };

  const deleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        setBookings(bookings.filter(b => b._id !== id));
        toast.success('Booking deleted');
      } catch (error) {
        toast.error('Delete failed');
      }
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/bookings/${id}/status`, { status });
      setBookings(bookings.map(b => b._id === id ? res.data : b));
      toast.success(`Status updated to ${status}`);
    } catch (error) {
      toast.error('Update failed');
    }
  };

  const filteredBookings = bookings.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.brand.toLowerCase().includes(search.toLowerCase()) ||
    b.phone.includes(search)
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="glass p-10 rounded-[40px] w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-8 text-center uppercase tracking-widest">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              placeholder="Enter Admin Password"
              className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/40">
              Login to Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold">Admin <span className="gradient-text">Dashboard</span></h1>
            <p className="text-slate-500 mt-2">Manage all printer repair requests from one place.</p>
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search name, brand, phone..." 
                className="bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-3 w-full outline-none focus:border-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-3 rounded-2xl transition-all"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredBookings.length === 0 ? (
            <div className="glass p-20 rounded-[40px] text-center">
              <AlertCircle className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 text-xl font-medium">No bookings found.</p>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <motion.div
                key={b._id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 md:p-8 rounded-[32px] border border-white/5 hover:border-blue-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.status === 'completed' ? 'bg-green-500/10 text-green-500' : 
                        b.status === 'cancelled' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {b.status}
                      </span>
                      <span className="text-slate-600 text-xs">{new Date(b.date).toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                      <h3 className="text-2xl font-bold">{b.name}</h3>
                      <span className="text-blue-500 font-semibold">{b.phone}</span>
                    </div>
                    <p className="text-slate-400 mt-2 flex items-center gap-2">
                      <span className="font-bold text-slate-300">Brand:</span> {b.brand}
                    </p>
                    <p className="text-slate-400 mt-1 flex items-start gap-2">
                      <span className="font-bold text-slate-300">Issue:</span> {b.issue}
                    </p>
                    <p className="text-slate-500 text-sm mt-3 italic">{b.address}</p>
                  </div>

                  <div className="flex md:flex-col justify-end gap-3 px-2">
                    {b.status === 'pending' && (
                      <button 
                        onClick={() => updateStatus(b._id, 'completed')}
                        className="bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white p-3 rounded-2xl transition-all"
                        title="Mark Completed"
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    )}
                    <button 
                      onClick={() => deleteBooking(b._id)}
                      className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-2xl transition-all"
                      title="Delete Booking"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
