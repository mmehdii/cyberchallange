import Link from 'next/link';
import { Module } from '@/data/modules';
import { Play } from 'phosphor-react';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={module.route} className="block">
      <div className="flex flex-col lg:flex-row card group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
        <div className="relative">
          <div 
            className="card-image h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
            style={{ backgroundImage: `url(${module.imagePath})` }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full">
              <Play size={20} weight="fill" className="text-primary" />
              <span className="text-sm font-medium text-primary">Start Module</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
              {module.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {module.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}