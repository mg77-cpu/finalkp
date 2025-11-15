import React from 'react';
import { 
  IconStar, 
  IconHeart, 
  IconUsers, 
  IconShield, 
  IconZap, 
  IconTarget,
  IconTrendingUp,
  IconAward,
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconCheck,
  IconArrowRight,
  IconExternalLink
} from './Icons';

const IconDemo: React.FC = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Lucide Icons Demo</h2>
      
      {/* Feature cards with icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <IconZap className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">Lightning-fast icon rendering</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <IconShield className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
          <p className="text-gray-600">Enterprise-grade security</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <IconUsers className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
          <p className="text-gray-600">Work together seamlessly</p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <IconTarget className="w-8 h-8 text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Goal Tracking</h3>
          <p className="text-gray-600">Achieve your objectives</p>
        </div>
      </div>

      {/* Contact information with icons */}
      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <IconMail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">hello@kpaccounting.com</span>
          </div>
          <div className="flex items-center gap-3">
            <IconPhone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <IconMapPin className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">123 Business St, City, State 12345</span>
          </div>
          <div className="flex items-center gap-3">
            <IconClock className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Mon-Fri 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Different icon sizes and colors */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Icon Sizes & Colors</h3>
        <div className="flex items-center gap-6 flex-wrap">
          <IconStar className="w-4 h-4 text-yellow-400" />
          <IconStar className="w-6 h-6 text-yellow-500" />
          <IconStar className="w-8 h-8 text-yellow-600" />
          <IconStar className="w-12 h-12 text-yellow-700 fill-current" />
        </div>
      </div>

      {/* Interactive buttons with icons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Interactive Elements</h3>
        
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
          <IconArrowRight className="w-4 h-4" />
        </button>
        
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          Learn More
          <IconExternalLink className="w-4 h-4" />
        </button>
        
        <div className="flex items-center gap-2 text-green-600">
          <IconCheck className="w-5 h-5" />
          <span>Account verified</span>
        </div>
      </div>

      {/* Stats with icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center">
          <IconTrendingUp className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">95%</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </div>
        
        <div className="text-center">
          <IconAward className="w-12 h-12 text-blue-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">10+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        
        <div className="text-center">
          <IconHeart className="w-12 h-12 text-red-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">500+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default IconDemo;