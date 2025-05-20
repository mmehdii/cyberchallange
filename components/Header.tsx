'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Add this import
import { usePathname } from 'next/navigation';
import { List } from 'phosphor-react';
import Sidebar from './Sidebar';
import Search from './Search';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <>
      <header className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden mr-2 flex items-center justify-center"
              >
                <List size={24} weight="regular" className="text-dark" />
              </button>
              <Link href="/" className=" items-center hidden md:flex">
                <Image 
                  src="/uni-logo.webp" 
                  alt="University Logo" 
                  width={150} 
                  height={40}
                  
                  className="mr-8 "
                />
                <span className="text-xl font-bold text-dark">CyberChallenge</span>
              </Link>
              <Link href="/" className="items-center flex md:hidden">
                <Image 
                  src="/uni-logo.webp" 
                  alt="University Logo" 
                  width={100} 
                  height={40}
                  
                  className="mr-8 ml-4 "
                />
                <span className="text-lg md:text-xl font-bold text-[#ed1d26]">CyberChallenge</span>
              </Link>
            </div>
            <div className='flex items-center justify-center gap-8'>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`${pathname === '/' ? 'text-[#ed1d26]' : 'text-dark hover:text-[#ed1d26]'}`}>
                Home
              </Link>
              <Link href="/modules" className={`${pathname === '/modules' ? 'text-[#ed1d26]' : 'text-dark hover:text-[#ed1d26]'}`}>
                Learn
              </Link>
              <Link href="/resources" className={`${pathname === '/resources' ? 'text-[#ed1d26]' : 'text-dark hover:text-[#ed1d26]'}`}>
                Resources
              </Link>
              <Link href="/about" className={`${pathname === '/about' ? 'text-[#ed1d26]' : 'text-dark hover:text-[#ed1d26]'}`}>
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center">
              <Search />
            </div>    
            </div>
          
          </div>
        </div>
      </header>
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}