import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Star, 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award,
  Settings,
  User,
  Search,
  Globe,
  BarChart3,
  Calculator,
  Receipt,
  CreditCard,
  Banknote
} from 'lucide-react';

// Custom Lithic Logo - Keep this as it's your brand logo
export const LithicLogo = ({ className = "" }: { className?: string }) => (
  <svg width="100" height="17" viewBox="0 0 100 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M82.932 8.5002C82.932 3.55725 86.8188 0.790039 91.5716 0.790039C96.0076 0.790039 99.6409 3.47275 99.9789 7.21165H95.4162C95.1838 5.85973 93.6418 4.52894 91.5716 4.52894C89.4381 4.52894 87.3891 5.85973 87.3891 8.47907C87.3891 11.1829 89.4381 12.4926 91.5716 12.4926C93.6418 12.4926 95.1838 11.1618 95.4162 9.76762H100C99.6409 13.9079 96.0076 16.2315 91.5716 16.2315C86.8188 16.2315 82.932 13.2108 82.932 8.5002Z" fill="currentColor"/>
    <path d="M77.1148 1.10691H81.5719V15.8935H77.1148V1.10691Z" fill="currentColor"/>
    <path d="M75.7543 1.10691V15.8935H71.276V10.1479H64.3263V15.8935H59.8692V1.10691H64.3263V6.55683H71.276V1.10691H75.7543Z" fill="currentColor"/>
    <path d="M58.5234 1.10691V4.69794H52.9468V15.8935H48.4685V4.69794H42.8919V1.10691H58.5234Z" fill="currentColor"/>
    <path d="M37.0746 1.10691H41.5317V15.8935H37.0746V1.10691Z" fill="currentColor"/>
    <path d="M27.1535 12.218L35.7298 12.1968V15.8935H22.6964V1.12802H27.1535V12.218Z" fill="currentColor"/>
    <path d="M0 4.46558C3.10519 4.52895 4.4571 3.53614 4.52048 1.10691H8.53398V4.31771C8.53398 4.69794 8.2805 4.88805 8.15376 4.97255L4.4571 7.71863C4.37261 7.782 3.90789 8.16223 3.27418 8.16223H0V4.46558ZM17.7439 4.46558V8.16223H14.4697C13.836 8.16223 13.3713 7.782 13.2868 7.71863L9.59017 4.97255C9.48455 4.88805 9.20994 4.69794 9.20994 4.31771V1.10691H13.2234C13.2868 3.53614 14.6387 4.52895 17.7439 4.46558ZM0 12.5348V8.83819H3.27418C3.92901 8.83819 4.37261 9.21842 4.4571 9.28179L8.15376 12.0279C8.25937 12.1124 8.53398 12.2814 8.53398 12.6827V15.8935H4.52048C4.4571 13.4643 3.10519 12.4715 0 12.5348ZM17.7439 12.5348C14.6387 12.4715 13.2868 13.4643 13.2234 15.8935H9.20994V12.6827C9.20994 12.2814 9.48455 12.1124 9.59017 12.0279L13.2868 9.28179C13.3713 9.21842 13.836 8.83819 14.4697 8.83819H17.7439V12.5348Z" fill="currentColor"/>
  </svg>
);

// Lucide Icons - Ready to use throughout your application
export const IconArrowRight = ArrowRight;
export const IconArrowLeft = ArrowLeft;
export const IconCheck = Check;
export const IconStar = Star;
export const IconHeart = Heart;
export const IconMenu = Menu;
export const IconX = X;
export const IconChevronRight = ChevronRight;
export const IconChevronLeft = ChevronLeft;
export const IconExternalLink = ExternalLink;
export const IconDownload = Download;
export const IconMail = Mail;
export const IconPhone = Phone;
export const IconMapPin = MapPin;
export const IconClock = Clock;
export const IconUsers = Users;
export const IconShield = Shield;
export const IconZap = Zap;
export const IconTarget = Target;
export const IconTrendingUp = TrendingUp;
export const IconAward = Award;
export const IconSettings = Settings;
export const IconUser = User;
export const IconSearch = Search;
export const IconGlobe = Globe;
export const IconBarChart = BarChart3;
export const IconCalculator = Calculator;
export const IconReceipt = Receipt;
export const IconCreditCard = CreditCard;
export const IconBanknote = Banknote;

export const NavButtonArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <path fillRule="evenodd" clipRule="evenodd" d="M9 14H13C13.5523 14 14 13.5523 14 13V1C14 0.447715 13.5523 0 13 0H9V2H12V12H9V14ZM6.58579 8L3.29289 11.2929L4.70711 12.7071L9.70711 7.70711C10.0976 7.31658 10.0976 6.68342 9.70711 6.29289L4.70711 1.29289L3.29289 2.70711L6.58579 6H0V8H6.58579Z" fill="currentColor"/>
    </svg>
);

export const ButtonArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.58579 8.00008L5.29289 12.293L6.70711 13.7072L12.7071 7.70718C13.0976 7.31666 13.0976 6.68349 12.7071 6.29297L6.70711 0.292969L5.29289 1.70718L9.58579 6.00008L1 6.00008L1 8.00008L9.58579 8.00008Z" fill="currentColor"/>
    </svg>
);

export const ArrowMedium = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <path d="M12.707 6.29285C13.0975 6.68336 13.0975 7.31638 12.707 7.70691L6.70703 13.7069L5.29297 12.2928L9.58594 7.99988H1V5.99988H9.58594L5.29297 1.70691L6.70703 0.292847L12.707 6.29285Z" fill="currentColor"/>
    </svg>
);

export const ChecklistTick = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <rect x="18" y="18" width="18" height="18" rx="9" transform="rotate(-180 18 18)" fill="#5C2999"/>
        <path d="M13.79 6.64746L8.07617 12.3623C7.9423 12.4961 7.76053 12.5712 7.57129 12.5713C7.3822 12.5712 7.20022 12.4959 7.06641 12.3623L4.20898 9.50488L5.21875 8.49512L7.57031 10.8467L12.7803 5.6377L13.79 6.64746Z" fill="white"/>
    </svg>
);

export const SwiperArrowPrev = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <g clipPath="url(#clip0_1237_16681)">
            <path d="M27.0605 16.5605L20.6211 23L33.5 23V26L20.6211 26L27.0605 32.4395L24.9384 34.5605L15.9394 25.5605L15.8359 25.4463C15.3558 24.8571 15.3904 23.9885 15.9394 23.4395L24.9394 14.4395L27.0605 16.5605Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_1237_16681">
                <rect width="21" height="21" fill="white" transform="translate(13.5 13.5)"/>
            </clipPath>
        </defs>
    </svg>
);

export const SwiperArrowNext = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
        <g clipPath="url(#clip0_1237_16683)">
            <path d="M33.0605 23.4395C33.6096 23.9885 33.6442 24.8571 33.1641 25.4463L33.0605 25.5605L24.0615 34.5605L21.9395 32.4395L28.3789 26L15.5 26L15.5 23L28.3789 23L21.9395 16.5605L24.0605 14.4395L33.0605 23.4395Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_1237_16683">
                <rect width="21" height="21" fill="white" transform="translate(13.5 13.5)"/>
            </clipPath>
        </defs>
    </svg>
);
