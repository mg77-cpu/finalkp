import React from 'react';
import { Calculator, Banknote, Briefcase, Scale } from 'lucide-react';
import SpotlightCard from './SpotlightCard';


const Features: React.FC = () => {
    return (
        <section id="services" className="py-12 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="lg:col-span-1">
                        <SpotlightCard spotlightColor="rgba(92, 41, 153, 0.2)">
                            <div className="bg-[#f0f0f0] rounded-2xl p-8 h-full flex flex-col">
                                <h3 className="text-3xl font-bold text-gray-900 max-w-sm">
                                    <span className="font-bold">Accounting</span>
                                    <br />
                                    <span className="text-base font-normal">Comprehensive bookkeeping and financial statement preparation</span>
                                </h3>
                                <div className="flex items-center space-x-8 mt-8">
                                    <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68542048a046c9cf700ecaac_American%20Express.svg" alt="American Express" className="h-5" />
                                    <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68542048005677eacad58bb1_Mastercard.svg" alt="Mastercard" className="h-8" />
                                    <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68542048da6ea5257ebf9fb4_Visa.svg" alt="Visa" className="h-5" />
                                </div>
                                <div className="mt-auto flex justify-end pt-8">
                                    <Banknote size={48} strokeWidth={1} />
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                    <div className="lg:col-span-1">
                        <SpotlightCard spotlightColor="rgba(92, 41, 153, 0.2)">
                            <div className="bg-[#f0f0f0] rounded-2xl p-8 h-full flex flex-col">
                                <h3 className="text-3xl font-bold text-gray-900 max-w-sm">
                                    <span className="font-bold">Taxation</span>
                                    <br />
                                    <span className="text-base font-normal">Expert tax planning and timely return lodgement</span>
                                </h3>
                                <div className="mt-auto flex justify-end pt-8">
                                    <Calculator size={48} strokeWidth={1} />
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                    <div className="lg:col-span-1">
                        <SpotlightCard spotlightColor="rgba(92, 41, 153, 0.2)">
                            <div className="bg-[#f0f0f0] rounded-2xl p-8 h-full flex flex-col">
                                <h3 className="text-3xl font-bold text-gray-900 max-w-sm">
                                    <span className="font-bold">Business Advisory</span>
                                    <br />
                                    <span className="text-base font-normal">Strategic financial planning and business growth consulting</span>
                                </h3>
                                <div className="mt-auto flex justify-end pt-8">
                                    <Briefcase size={48} strokeWidth={1} />
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                     <div className="lg:col-span-1">
                        <SpotlightCard spotlightColor="rgba(92, 41, 153, 0.2)">
                            <div className="bg-[#f0f0f0] rounded-2xl p-8 h-full flex flex-col">
                                <h3 className="text-3xl font-bold text-gray-900 max-w-sm">
                                    <span className="font-bold">Compliance</span>
                                    <br />
                                    <span className="text-base font-normal">Regulatory adherence and risk management solutions</span>
                                </h3>
                                <div className="mt-auto flex justify-end pt-8">
                                    <Scale size={48} strokeWidth={1} />
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
