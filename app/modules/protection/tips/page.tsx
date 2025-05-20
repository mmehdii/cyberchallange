'use client';
import PageLayout from '@/components/PageLayout';
import { securityTips } from '@/data/protection';
import Button from '@/components/Button';
import { ArrowCircleUp, Lock, ShieldCheck, WarningCircle, WifiHigh, CloudArrowUp } from 'phosphor-react';

export default function ProtectionTipsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowCircleUp':
        return <ArrowCircleUp size={32} weight="fill" className="text-[#ed1d26]" />;
      case 'Lock':
        return <Lock size={32} weight="fill" className="text-[#ed1d26]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={32} weight="fill" className="text-[#ed1d26]" />;
      case 'WarningCircle':
        return <WarningCircle size={32} weight="fill" className="text-[#ed1d26]" />;
      case 'WifiHigh':
        return <WifiHigh size={32} weight="fill" className="text-[#ed1d26]" />;
      case 'CloudArrowUp':
        return <CloudArrowUp size={32} weight="fill" className="text-[#ed1d26]" />;
      default:
        return <ShieldCheck size={32} weight="fill" className="text-[#ed1d26]" />;
    }
  };

  return (
    <PageLayout
      title="Security Tips"
      description="Essential tips to enhance your cybersecurity posture."
    >
      <div className="px-4 py-3">
        <p className="mb-4">
          Follow these essential security tips to significantly improve your protection against cyber threats.
        </p>
        
        <div className="space-y-4 mb-6">
          {securityTips.map((tip) => (
            <div key={tip.id} className="p-4 border rounded-xl bg-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getIcon(tip.icon)}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{tip.title}</h4>
                  <p className="text-sm text-muted">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-100 p-4 rounded-xl mb-6">
          <h3 className="font-bold mb-2">Remember:</h3>
          <p className="text-sm">
            Cybersecurity is an ongoing process. Stay informed about the latest threats and
            regularly update your protection strategies and tools.
          </p>
        </div>
        
       
      </div>
    </PageLayout>
  );
}