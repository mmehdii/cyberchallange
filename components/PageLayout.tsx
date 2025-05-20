import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  heroImage?: string;
  title?: string;
  description?: string;
  hideFooter?: boolean;
}

export default function PageLayout({
  children,
  heroImage,
  title,
  description,
  hideFooter = false,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-8">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {heroImage && (
            <div className="@container mb-8">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-xl min-h-[220px] shadow-sm"
                  style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
              </div>
            </div>
          )}
          
          {title && (
            <h1 className="text-dark text-[22px] md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-4 pt-6">
              {title}
            </h1>
          )}
          
          {description && (
            <p className="text-dark text-base md:text-lg font-normal leading-normal pb-6 pt-2 px-4 text-center max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
      
      {!hideFooter && <Footer />}
      
    </div>
  );
}