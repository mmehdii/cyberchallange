import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Awareness Challenge',
  description: 'Become a cyber-savvy expert in 5 minutes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}