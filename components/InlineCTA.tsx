import React from 'react';
import { ArrowMedium } from './Icons';

const InlineCTA: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#E4F5E1] rounded-lg p-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <p className="text-xl font-bold text-gray-800 text-center lg:text-left">Want to skip directly to the metal?</p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
                            <a href="#" className="flex items-center gap-2 text-black font-bold hover:text-[#5C2999] transition-colors">
                                <span>Explore Sandbox</span>
                                <span className="w-3.5 h-3.5"><ArrowMedium /></span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-black font-bold hover:text-[#5C2999] transition-colors">
                                <span>Read the docs</span>
                                 <span className="w-3.5 h-3.5"><ArrowMedium /></span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-black font-bold hover:text-[#5C2999] transition-colors">
                                <span>View the changelog</span>
                                <span className="w-3.5 h-3.5"><ArrowMedium /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InlineCTA;
