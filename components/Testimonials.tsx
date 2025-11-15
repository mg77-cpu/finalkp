import React, { useEffect, useRef } from 'react';
import { SwiperArrowPrev, SwiperArrowNext } from './Icons';

interface Testimonial {
    logo: string;
    quote: string;
    avatar: string;
    name: string;
    title: string;
}

const testimonials: Testimonial[] = [
    {
        logo: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c81_Logos%20(Customers%20%26%20Partners).svg",
        quote: "Lithic has surpassed our product expectations and has handled hundreds of millions of dollars of monthly volume without issue. We trust their tech and value their deep cards expertise that we can tap into.",
        avatar: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c7f_image%209.webp",
        name: "Catherine Unertl",
        title: "Head of Financial Partnerships"
    },
    {
        logo: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c82_Logos%20(Customers%20%26%20Partners).svg",
        quote: "Lithic has been a huge part of what makes the Order.co platform work as smoothly as it does. We’re issuing hundreds of thousands of single and multi-use virtual cards annually via the Lithic API.",
        avatar: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c84_image%209.webp",
        name: "Zach Garippa",
        title: "Co-founder and CEO"
    },
    {
        logo: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c94_atlas.svg",
        quote: "When we explored issuing partners, Lithic was hands-down the fastest path to market. They had an easy-to-implement API and a great team across partnerships, implementation, and support.",
        avatar: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c87_zane.webp",
        name: "Zane Salim",
        title: "Co-founder and CEO"
    },
    {
        logo: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c98_parker%20logo.svg",
        quote: "We are consistently amazed by Lithic’s adaptability and tailored solutions. Their prompt problem-solving and consistent availability make them one of the most dependable partners we’ve ever collaborated with.",
        avatar: "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/685475ab0092ba1cfa3e6c96_yacine%20sibous.webp",
        name: "Yacine Sibous",
        title: "Founder"
    }
];

const Testimonials: React.FC = () => {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const Swiper = (window as any).Swiper;
        if (Swiper && swiperRef.current) {
            new Swiper(swiperRef.current, {
                slidesPerView: 'auto',
                spaceBetween: 30,
                navigation: {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                },
                keyboard: {
                    enabled: true,
                },
            });
        }
    }, []);

    return (
        <section className="bg-white py-16 sm:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper items-stretch">
                        <div className="swiper-slide !w-full max-w-sm flex">
                            <div className="pr-8">
                                <h2 className="text-4xl font-bold text-gray-900">Discover what our clients have to say</h2>
                                <p className="mt-4 text-gray-600">From innovative start-ups to evolving enterprises, ambitious teams around the world choose Lithic to help change their customers’ lives.</p>
                            </div>
                        </div>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="swiper-slide !w-full max-w-sm flex">
                                <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between h-full">
                                    <img src={testimonial.logo} alt="" className="h-8 mb-6 self-start"/>
                                    <blockquote className="flex-grow">
                                        <p className="text-gray-700">“{testimonial.quote}”</p>
                                    </blockquote>
                                    <footer className="mt-6 flex items-center gap-4">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full"/>
                                        <div>
                                            <div className="font-bold text-gray-900">{testimonial.name}</div>
                                            <div className="text-gray-600">{testimonial.title}</div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="flex items-center justify-end mt-8 gap-4 max-w-sm ml-auto">
                    <button ref={prevRef} className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                       <SwiperArrowPrev />
                    </button>
                    <button ref={nextRef} className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                       <SwiperArrowNext />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
