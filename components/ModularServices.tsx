import React from 'react';
import { ButtonArrow } from './Icons';

const Card: React.FC<{icon: React.ReactNode, title: string, description: React.ReactNode, href?: string}> = ({icon, title, description, href}) => (
    <a href={href || "#"} className={`bg-[#222222] p-8 rounded-2xl flex flex-col space-y-4 group transition-colors hover:bg-[#333] ${href ? '' : 'pointer-events-none'}`}>
        <div className="flex items-center gap-3">
            <div className="w-5 h-5 text-[#EEC07A]">{icon}</div>
            <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        <p className="text-gray-400">{description}</p>
        {href && (
             <div className="pt-2 text-[#EEC07A] flex items-center gap-2 font-bold group-hover:text-white transition-colors">
                <span>Learn more</span>
                <span className="w-3.5 h-3.5"><ButtonArrow /></span>
            </div>
        )}
    </a>
);


const ModularServices: React.FC = () => {
    return (
        <section className="bg-black text-white py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Payments are complex. Your programs don’t need to be.</h2>
                        <p className="text-xl font-bold mb-4">Launch with ease, iterate with insights, and drive revenue growth with a trusted partner.</p>
                        <p className="text-gray-400">Our seasoned team of experts provide guidance and act as an extension of your team, from implementation and launch all the way through to ongoing program success. It really is that simple.</p>
                    </div>
                    <div>
                        <img src="https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863dc692423b06781f56b30_device.webp" alt="Device showing Lithic dashboard" className="w-full h-auto" />
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold max-w-2xl mx-auto">Modular service options tailored to your needs</h2>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card 
                        href="#"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_1268_5118)"><path d="M6.47173 10.7583L4.01568 13.2144H18.5713V15.3579H4.01568L6.47173 17.814L4.95611 19.3296L0.670949 15.0435L0.597707 14.9624C0.277251 14.5697 0.277402 14.0027 0.597707 13.6099L0.670949 13.5288L4.95611 9.24268L6.47173 10.7583ZM19.3292 4.95654L19.4024 5.0376C19.7229 5.43034 19.7227 5.99728 19.4024 6.39014L19.3292 6.47119L15.044 10.7573L13.5284 9.2417L15.9844 6.78564H1.42876V4.64209H15.9844L13.5284 2.18604L15.044 0.67041L19.3292 4.95654Z" fill="currentColor"/></g><defs><clipPath id="clip0_1268_5118"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>}
                        title="Processor Client"
                        description={<><span className="font-bold text-white">Own your bank relationship.</span> Directly handle your bank partnership while using Lithic’s processing and ledgering suite, with the flexibility to add burden-reducing services like end-to-end disputes management.</>}
                    />
                     <Card 
                        href="#"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none"><path d="M12.8574 2.5H2.5V16.0713H16.0713V12.5H18.2148V17.1436C18.2145 17.735 17.734 18.2148 17.1426 18.2148H1.42871C0.837181 18.2148 0.357751 17.735 0.357422 17.1436V1.42871C0.357469 0.837021 0.83701 0.357426 1.42871 0.357422H12.8574V2.5ZM19.3291 3.61523L10.7568 12.1865C10.3384 12.6043 9.66043 12.6046 9.24219 12.1865L4.95605 7.90039L5.71387 7.14355L6.47168 6.38574L9.99902 9.91309L17.8135 2.09961L19.3291 3.61523Z" fill="currentColor"/></svg>}
                        title="Lithic Program Management"
                        description={<><span className="font-bold text-white">Protect your peace of mind.</span> Offload the full operational complexity of bank, network, and regulatory compliance, so you can focus on creating a delightful experience for your cardholders.</>}
                    />
                     <Card 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none"><path d="M2 3V9H5C5.55228 9 6 9.44771 6 10V11L8.40039 9.2002L8.53613 9.11426C8.67859 9.03966 8.83762 9 9 9H12V3H2ZM14 9C14 10.1046 13.1046 11 12 11H9.33301L5.59961 13.7998C5.29661 14.027 4.89146 14.0639 4.55273 13.8945C4.21395 13.7251 4 13.3788 4 13V11H2C0.895431 11 0 10.1046 0 9V3C0 1.89543 0.895431 1 2 1H12C13.1046 1 14 1.89543 14 3V9Z" fill="currentColor"/></svg>}
                        title="Customer Support"
                        description="Delight your cardholders with 24/7/365 comprehensive support tailored to your brand’s tone of voice."
                    />
                     <Card 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15 14" fill="none"><path d="M9.76465 0.00488281C9.99365 0.0275729 10.2089 0.128826 10.373 0.292969L13.373 3.29297L13.4395 3.36621C13.5853 3.54417 13.666 3.76791 13.666 4V13C13.666 13.5523 13.2183 14 12.666 14H2.66602C2.11373 14 1.66602 13.5523 1.66602 13V1L1.6709 0.897461C1.72223 0.393331 2.14834 0 2.66602 0H9.66602L9.76465 0.00488281ZM3.66602 12H11.666V4.41406L9.25195 2H3.66602V12Z" fill="currentColor"/></svg>}
                        title="Disputes"
                        description="Minimize fraud losses and deter bad actors with end-to-end disputes and chargeback resolution."
                    />
                     <Card 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15 14" fill="none"><g clipPath="url(#clip0_1247_20444)"><path d="M7.93262 0.700195C7.93992 0.705318 7.95511 0.714437 7.97656 0.728516C8.02083 0.757561 8.09504 0.804678 8.19922 0.863281C8.40785 0.980623 8.73704 1.14529 9.18555 1.31348C10.081 1.64922 11.4621 2 13.334 2H14.334V3C14.334 8.19416 12.2348 12.8051 7.57617 13.9697L7.33398 14.0312L7.0918 13.9697C2.43516 12.8056 0.333984 8.24528 0.333984 3V2H1.33398C3.2059 2 4.587 1.64922 5.48242 1.31348C5.93093 1.14529 6.26012 0.980623 6.46875 0.863281C6.57293 0.804678 6.64714 0.757561 6.69141 0.728516C6.71224 0.714846 6.72689 0.705439 6.73438 0.700195L7.33398 0.25L7.93262 0.700195ZM7.33398 2.66699C7.05054 2.81985 6.66847 3.00541 6.18555 3.18652C5.26599 3.53136 3.98963 3.86437 2.36035 3.9668C2.59248 8.17966 4.36397 11.0923 7.33398 11.9619C10.3004 11.0913 12.0715 8.14491 12.3057 3.9668C10.6773 3.86423 9.40161 3.53122 8.48242 3.18652C7.9995 3.00541 7.61743 2.81985 7.33398 2.66699Z" fill="currentColor"/></g><defs><clipPath id="clip0_1247_20444"><rect width="14" height="14" fill="white" transform="translate(0.333984)"/></clipPath></defs></svg>}
                        title="Fraud & Risk"
                        description="Proactively protect your program with expertly determined fraud logic and transaction monitoring."
                    />
                </div>
            </div>
        </section>
    );
};

export default ModularServices;
