import React from 'react';

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Case Study - Zahra Body Works",
      client: "Jake - Motor Vehicle Panel Repair Business",
      challenge: {
        heading: "The Challenge",
        content: "Jake took over his family's successful motor vehicle panel repair business, Zahra Body Works, but soon realised managing tax and GST obligations was complicated and stressful. He reached out to KP Accounting & Tax Services for ongoing support."
      },
      solution: {
        heading: "The Solution",
        content: "We implemented a monthly profit monitoring system, giving Jake clear insights into his profits, expenses, and upcoming tax liabilities. Now, Jake always knows exactly what to expect, monthly, quarterly, and at year-end, eliminating any unwanted surprises from the ATO."
      },
      results: [
        {
          heading: "Results",
          items: [
            "Finances always up-to-date",
            "BAS and tax returns lodged on time without fall",
            "Effective budgeting capability",
            "Eliminated unexpected tax bills",
            "No more costly interest charges and late fees",
            "Predictable, secure, and stress-free finances"
          ]
        },
        {
          heading: "Results",
          items: [
            "Expanded into larger premises",
            "Hired additional staff",
            "Significantly boosted capacity and revenue",
            "Eliminated ATO interest charges and late fees",
            "Clear understanding of cash flow limits and opportunities"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Case Study - Feel Good Events",
      client: "Marcus - Events Management",
      challenge: {
        heading: "The Challenge",
        content: "Prior to working with KP Accounting & Tax Services, Marcus, owner of Feel Good Events, felt he wasn't getting the attention he needed from his accountant and bookkeeper. His books were consistently behind, leaving him unsure about his business's financial position until it was too late to take meaningful action."
      },
      solution: {
        heading: "The Solution",
        content: "KP stepped in by implementing accurate, monthly profit and loss reporting, immediately giving Marcus clarity on the financial health of his business. This allowed him to quickly identify cost-saving opportunities and areas to boost profits. Additionally, our proactive and timely guidance meant Marcus always knew his upcoming GST and tax liabilities, months in advance."
      },
      results: []
    }
  ];

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#5C2999]">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {caseStudies.map((study, index) => (
          <div key={study.id} className="mb-16 last:mb-0">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                {study.title}
              </h2>
              <p className="text-lg text-gray-600 font-medium">{study.client}</p>
              <div className="w-24 h-1 bg-[#5C2999] rounded-full mx-auto mt-4"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Challenge Section */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#5C2999] bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#5C2999] font-bold text-sm">!</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{study.challenge.heading}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{study.challenge.content}</p>
              </div>

              {/* Solution Section */}
              <div className="bg-[#f8f9fa] rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#5C2999] rounded-full flex items-center justify-center mr-3">
                    <CheckIcon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{study.solution.heading}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{study.solution.content}</p>
              </div>
            </div>

            {/* Results Section */}
            {study.results.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Business Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {study.results.map((resultGroup, resultIndex) => (
                    <div key={resultIndex}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{resultGroup.heading}</h4>
                      <div className="space-y-3">
                        {resultGroup.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <CheckIcon />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            {index < caseStudies.length - 1 && (
              <div className="border-t border-gray-200 my-16"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;