import React, { useState, useEffect, useRef } from 'react';
import { ButtonArrow, ChecklistTick } from './Icons';

const tabsData = [
  {
    id: 1,
    title: 'Processor Gateway',
    heading: 'Reliable and fast at scale',
    description: 'Direct network connections and record platform availability keep your program running smoothly and enable seamless reconciliation.',
    features: ['Multi-currency', 'Enhanced commercial data', 'Transaction grouping'],
    link: '/transaction-processing',
    images: [
      "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68839a95a9468e383a1a57d9_pg%201.webp",
      "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68865df61a40063af8367af5_pg%202.webp",
      "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68865df6ab9e4ca112520962_pg%203.webp",
    ]
  },
  {
    id: 2,
    title: 'Card Issuing',
    heading: 'Customize your offerings',
    description: 'Issue credit, debit, and prepaid cards for individuals and businesses with next-gen features your cardholders will love.',
    features: ['Instant issuance', 'Mobile & web provisioning', 'Custom card printing'],
    link: '/card-issuing',
    images: [
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686ed01fbb033519be66ccae_mercury-card-lithic-1%201.avif",
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686ed01fadf2e1d64109561e_novo-card-lithic-1%201.webp",
    ]
  },
  {
    id: 3,
    title: 'Fraud Controls',
    heading: 'Stay compliant and in control',
    description: 'Make smarter and faster decisions for your program, by dynamically configuring risk and fraud prevention rules through our developer-friendly APIs and dashboard.',
    features: ['Identity verification', 'Tokenization control', 'Authorization decisioning'],
    link: '/fraud-risk-management',
    images: [
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68865e58ff3dcd6cc8c7954b_fc%201.webp",
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68865e83344a4d5421f30312_fc%202.webp",
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68865e5872b25d632f529555_fc%203.webp",
    ]
  },
  {
    id: 4,
    title: 'Accounts',
    heading: 'Never second guess settlements',
    description: 'Gain full visibility and control of your program’s money movement through Lithic’s own or our preferred partners’ precise debit and credit ledgers.',
    features: ['Settlement API', 'Virtual and routable accounts', 'ACH and wire transfers'],
    link: '/platform/accounts',
    images: [
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686ef590ed311d7090d7d69e_acc%201.svg",
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686ef59003b09d0477b92d7a_acc%202.svg",
        "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686ef5907dd70670c4a92555_acc%203.svg",
    ]
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  // FIX: Replaced `NodeJS.Timeout` with `number` for browser compatibility.
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<SVGCircleElement>(null);
  const progressAnimationRef = useRef<any>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };
  
  useEffect(() => {
    const gsap = (window as any).gsap;
    if (!gsap) return;

    function startAutoRotation() {
      if (progressAnimationRef.current) progressAnimationRef.current.kill();
      if (progressRef.current) {
        gsap.set(progressRef.current, { strokeDashoffset: 75.4 });
        progressAnimationRef.current = gsap.to(progressRef.current, {
          strokeDashoffset: 0,
          duration: 10,
          ease: "none",
          onComplete: () => {
            setActiveTab(prev => (prev % tabsData.length) + 1);
          },
        });
      }
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            startAutoRotation();
        } else {
            if (progressAnimationRef.current) progressAnimationRef.current.kill();
        }
      },
      { threshold: 0.5 }
    );

    if (tabContainerRef.current) {
      observer.observe(tabContainerRef.current);
    }
    
    startAutoRotation();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressAnimationRef.current) progressAnimationRef.current.kill();
      if (tabContainerRef.current) observer.unobserve(tabContainerRef.current);
    };
  }, [activeTab]);


  return (
    <section ref={tabContainerRef} className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 max-w-3xl mx-auto">Fast, flexible, and fool-proof? Not an issue.</h2>
      </div>
      <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 text-left flex flex-col items-start min-h-[400px]">
          {tabsData.map(tab => (
            <div key={tab.id} className={`flex-col space-y-4 w-full ${activeTab === tab.id ? 'flex' : 'hidden'}`}>
                <h3 className="text-3xl font-bold text-gray-900">{tab.heading}</h3>
                <p className="text-gray-600">{tab.description}</p>
                <div className="space-y-2">
                    {tab.features.map(feature => (
                        <div key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 flex-shrink-0"><ChecklistTick /></div>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <a href={tab.link} className="bg-gray-200 text-black px-5 py-2.5 rounded-md text-base font-semibold flex items-center gap-2 hover:bg-gray-300 transition-colors">
                    <span>Learn more</span>
                    <span className="w-4 h-4"><ButtonArrow /></span>
                </a>
            </div>
          ))}
        </div>
        <div className="relative order-1 lg:order-2 h-96">
            {tabsData.map(tab => (
                <div key={tab.id} className={`absolute inset-0 transition-opacity duration-500 ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                     {tab.images.map((img, idx) => (
                        <img key={img} src={img} alt="" className={`absolute shadow-xl rounded-lg transition-all duration-500 ease-out 
                        ${activeTab === tab.id ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`} 
                        style={{
                            transitionDelay: `${idx * 100}ms`,
                            ...(tab.id === 1 && idx === 0 && { width: '50%', top: '0', left: '10%' }),
                            ...(tab.id === 1 && idx === 1 && { width: '48%', top: '40%', right: '5%' }),
                            ...(tab.id === 1 && idx === 2 && { width: '48%', bottom: '0', left: '5%' }),
                            ...(tab.id === 2 && idx === 0 && { width: '70%', top: '5%', right: '5%' }),
                            ...(tab.id === 2 && idx === 1 && { width: '70%', bottom: '5%', left: '5%' }),
                             ...(tab.id === 3 && idx === 0 && { width: '60%', top: '0', right: '0' }),
                            ...(tab.id === 3 && idx === 1 && { width: '70%', top: '30%', left: '0' }),
                            ...(tab.id === 3 && idx === 2 && { width: '60%', bottom: '0', right: '10%' }),
                            ...(tab.id === 4 && idx === 0 && { width: '50%', top: '0', left: '10%' }),
                            ...(tab.id === 4 && idx === 1 && { width: '50%', top: '45%', right: '10%' }),
                            ...(tab.id === 4 && idx === 2 && { width: '50%', bottom: '0', left: '20%' }),
                        }}/>
                     ))}
                </div>
            ))}
        </div>
      </div>
      <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-4 relative">
        <div className="flex overflow-x-auto no-scrollbar">
            {tabsData.map(tab => (
                <button key={tab.id} onClick={() => handleTabClick(tab.id)} className={`px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? 'border-purple-700 text-purple-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                    {tab.title}
                </button>
            ))}
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
            <svg width="32" height="32" viewBox="0 0 32 32" className="-rotate-90">
                <circle className="stroke-purple-700/20" strokeWidth="3" fill="transparent" r="12" cx="16" cy="16" />
                <circle ref={progressRef} className="stroke-purple-700" strokeWidth="3" strokeDasharray="75.4" strokeDashoffset="75.4" strokeLinecap="round" fill="transparent" r="12" cx="16" cy="16" />
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Tabs;