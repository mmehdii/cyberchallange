'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="bg-[#484444] text-white mt-16 border-t border-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-xs font-light">
            <Link href="/" className="hover:underline mr-3">Home</Link>
            <span className="mx-1">|</span>
            <Link href="/modules" className="hover:underline mx-3">Modules</Link>
            <span className="mx-1">|</span>
            <Link href="/resources" className="hover:underline mx-3">Resources</Link>
          </div>
          
          <div className="text-xs font-light flex items-center">
            <a href='https://www.griffith.edu.au/life-at-griffith/off-campus/gold-coast' className="hover:underline">Gold Coast</a>
            <span className="mx-1">|</span>
            <a href='https://www.griffith.edu.au/life-at-griffith/off-campus/logan' className="hover:underline">Logan</a>
            <span className="mx-1">|</span>
            <a href='https://www.griffith.edu.au/life-at-griffith/off-campus/brisbane' className="hover:underline">Brisbane</a>
            <span className="mx-1">–</span>
            <a href='https://www.griffith.edu.au/life-at-griffith/australia' className="hover:underline">Queensland, Australia</a>
            <span className="ml-2">
              <Image 
                src="/flag.png" 
                alt="Australian Flag" 
                width={50} 
                height={16} 
                className="inline-block"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}