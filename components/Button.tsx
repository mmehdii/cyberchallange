import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const buttonClasses = clsx(
    'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 md:h-12 px-4 md:px-6 text-sm md:text-base font-bold leading-normal tracking-[0.015em] grow',
    {
      'bg-[#ed1d26] text-slate-50': variant === 'primary',
      'bg-secondary text-dark': variant === 'secondary',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <span className="truncate">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}