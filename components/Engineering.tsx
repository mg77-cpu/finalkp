import React from 'react';
import { ButtonArrow } from './Icons';

const Engineering: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-100 rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="p-8 sm:p-12">
                             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">Empower your engineering team to ship more quickly and efficiently</h2>
                            <p className="mt-6 text-gray-600">
                                When scaling our sister brand <a href="https://www.privacy.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-black">Privacy</a>, we found the existing issuing infrastructure was poorly maintained, sparsely documented, and extremely slow-moving. So, we built Lithic: developer-friendly, expertly written API docs, and insanely fast.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <a href="#" className="bg-black text-white px-5 py-3 rounded-md text-base font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                    <span>Read our docs</span>
                                    <span className="w-4 h-4"><ButtonArrow /></span>
                                </a>
                                <a href="#" className="text-black font-semibold flex items-center gap-2 hover:text-gray-700 transition-colors">
                                    <span>Explore Sandbox</span>
                                    <span className="w-4 h-4"><ButtonArrow /></span>
                                </a>
                            </div>
                        </div>
                        <div className="relative h-80 lg:h-full">
                           <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6862d3a83e6a31b3f9c3ba5f_f4b897ced8f17248ae4bd30823d96f7c_engineering%20asset%201.avif" alt="Code snippet" className="absolute top-0 right-0 w-3/4 rounded-lg shadow-lg" />
                           <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6862d3a9670865b6946b76b2_aab7a10ee064e3c156e0b5e56462d4bb_engineering%20asset%202.avif" alt="API response" className="absolute bottom-0 left-0 w-3/4 rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Engineering;
