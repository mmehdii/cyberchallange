'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X, House, ShieldCheck, BookOpen, GraduationCap, Info } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-xl">Menu</h2>
              <button onClick={onClose}>
                <X size={24} weight="bold" className="text-dark" />
              </button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link href="/" 
                    className="flex items-center gap-3 text-dark hover:text-[#ed1d26] p-2 rounded transition-colors"
                    onClick={onClose}
                  >
                    <House size={20} weight="fill" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/modules" 
                    className="flex items-center gap-3 text-dark hover:text-[#ed1d26] p-2 rounded transition-colors"
                    onClick={onClose}
                  >
                    <GraduationCap size={20} weight="fill" />
                    <span>All Modules</span>
                  </Link>
                </li>
                
                <li>
                  <Link href="/resources" 
                    className="flex items-center gap-3 text-dark hover:text-[#ed1d26] p-2 rounded transition-colors"
                    onClick={onClose}
                  >
                    <BookOpen size={20} weight="fill" />
                    <span>Resources</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" 
                    className="flex items-center gap-3 text-dark hover:text-[#ed1d26] p-2 rounded transition-colors"
                    onClick={onClose}
                  >
                    <Info size={20} weight="fill" />
                    <span>About</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}