import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, BookOpen, Mail, Menu, X } from 'lucide-react';

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const dockItems: DockItem[] = [
  { title: 'Home', icon: <Home className="h-5 w-5" />, href: '#hero' },
  { title: 'Services', icon: <Briefcase className="h-5 w-5" />, href: '#services' },
  { title: 'About', icon: <Users className="h-5 w-5" />, href: '#about' },
  { title: 'Contact', icon: <Mail className="h-5 w-5" />, href: '#contact' },
];

export const FloatingDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
      {/* Floating Dock Container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        {/* Dock Background */}
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-full shadow-2xl border border-gray-200/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-2 px-6 py-3 bg-purple-100 rounded-full">
            {dockItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-3 rounded-full hover:bg-[#5C2999] hover:text-white transition-all duration-200 text-gray-700">
                  {item.icon}
                </div>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ opacity: 0, y: -5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {item.title}
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 rounded-full hover:bg-[#5C2999] hover:text-white transition-all duration-200 text-gray-700"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 p-4 min-w-[200px]"
          >
            <div className="space-y-2">
              {dockItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    handleNavigation(e, item.href);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#5C2999] hover:text-white transition-all duration-200 text-gray-700"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default FloatingDock;