'use client';
import Link from 'next/link';
import { WarningCircle } from 'phosphor-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 text-center">
      <div className="mb-4">
        <WarningCircle size={64} weight="fill" className="text-[#ed1d26] mx-auto" />
      </div>
      <h1 className="text-2xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-muted mb-6">The page you are looking for does not exist or has been moved.</p>
      <Link 
        href="/" 
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ed1d26] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">Return to Home</span>
      </Link>
    </div>
  );
}