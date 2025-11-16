import React from 'react';
import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import TiltedCard from './TiltedCard';
import Magnet from './Magnet'


const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      problem: "I don't know how much tax I owe until it's too late",
      solution: "At KP, we offer tax planning before June 30 that is tailored to your small business so there are no end of year shocks. Either in an annual check up or on a monthly basis."
    },
    {
      problem: "I make decent money, but never seem to have enough for the tax",
      solution: "We’ll design a step‑by‑step system to set aside part of each paycheck for taxes and schedule regular check‑ins, helping you stay on top of finances."
    },
    {
      problem: "I forget when my BAS and Tax are due to be lodged",
      solution: "We communicate your due dates in advance so you are always aware what is coming up and can manage your cashflow"
    },
    {
      problem: "I just want someone to tell me what to do so I can get on with running my business",
      solution: "You run your business, KP will handle the books! From the Xero reconciliations, BAS, budgeting and tax, we will be there for you"
    },
    {
      problem: "I don't know how my business in performing until the end of the year",
      solution: "At KP we provide monthly analysis of how you are tracking and compare that to previous periods so that you know where you are going well and not so well"
    },
    {
      problem: "I hate dealing with numbers, they give me anxiety",
      solution: "We get it, numbers aren't for everyone. Our job is to take this pressure off you and explain the numbers in plain English. No jargon"
    }
  ];
  const containerRef = useRef();
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            ref={containerRef}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={'What you\'re probably dealing with...'}
              className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
            Common challenges small business owners face with their accounting and taxes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="p-2 sm:p-4">
              <TiltedCard
                imageSrc="https://via.placeholder.com/400"
                altText={point.problem}
                captionText={point.problem}
                containerHeight="400px"
                containerWidth="w-full"
                imageHeight="400px"
                imageWidth="w-full"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="bg-[#F5F5F5] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-[#EADFF6] bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                          {/* Icon based on problem */}
                          <svg className="w-6 h-6 text-[#5C2999]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.problem}</h3>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#5C2999] bg-opacity-20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-[#5C2999]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed">{point.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center bg-green-400 bg-opacity-10 rounded-2xl px-8 py-6">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Ready to solve these accounting challenges?
              </p>
              <p className="text-gray-600 mb-5">
                Let's make your business finances simple and stress-free
              </p>
              <Magnet 
                    padding={50} 
                    disabled={false} 
                    magnetStrength={10}>
                                     <a href="/appointments" 
                                     className="bg-green-400 text-white hover:text-black transition-colors duration-200 px-4 py-2 text-lg font-semibold rounded-md">
                                     Book an Appointment
                                      </a>
                 
                    </Magnet>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default PainPointsSection;