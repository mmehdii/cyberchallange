import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted mb-4">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <CaretRight size={16} weight="bold" />}
          <Link 
            href={item.href}
            className={`hover:text-[#ed1d26] transition-colors ${
              index === items.length - 1 ? 'text-dark font-medium' : ''
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
} 