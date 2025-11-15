# Lucide Icons Usage Guide for KP Accounting

## Overview
Lucide React is now installed and ready to use in your project! This guide will help you make the most of this powerful icon library.

## What You Get
- **1000+ beautiful icons** - All consistent in style and design
- **TypeScript support** - Full type safety and autocomplete
- **Tree-shaking** - Only the icons you use are included in your bundle
- **Customizable** - Easy to change size, color, stroke width
- **Accessible** - Built with accessibility best practices

## Basic Usage

### 1. Import Icons
```tsx
// Import individual icons (recommended for tree-shaking)
import { Star, Heart, Users } from 'lucide-react';

// Or import from your centralized Icons.tsx
import { IconStar, IconHeart, IconUsers } from './components/Icons';
```

### 2. Use Icons in Components
```tsx
// Basic usage
<Star />

// With custom props
<Star size={24} color="#FF6A39" strokeWidth={2} />

// With Tailwind classes
<Star className="w-6 h-6 text-orange-500" />
```

## Icon Props
All Lucide icons accept these props:
- `size` - Number (default: 24)
- `color` - String (default: "currentColor")
- `strokeWidth` - Number (default: 2)
- `className` - String (Tailwind classes)
- `fill` - String (for filled icons)

## Common Patterns

### 1. Feature Cards
```tsx
<div className="p-6 border rounded-lg">
  <Shield className="w-8 h-8 text-green-500 mb-4" />
  <h3 className="text-lg font-semibold">Secure & Reliable</h3>
  <p className="text-gray-600">Enterprise-grade security</p>
</div>
```

### 2. Contact Information
```tsx
<div className="flex items-center gap-3">
  <Mail className="w-5 h-5 text-gray-600" />
  <span>hello@kpaccounting.com</span>
</div>
```

### 3. Interactive Buttons
```tsx
<button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
  Get Started
  <ArrowRight className="w-4 h-4" />
</button>
```

### 4. Status Indicators
```tsx
<div className="flex items-center gap-2 text-green-600">
  <Check className="w-5 h-5" />
  <span>Account verified</span>
</div>
```

## Recommended Icons for Accounting Business

### Business & Finance
- `Calculator` - For tax calculations
- `Receipt` - For expense tracking
- `CreditCard` - For payment processing
- `Banknote` - For cash flow
- `TrendingUp` - For growth metrics
- `BarChart3` - For financial reports
- `PieChart` - For budget breakdowns

### Communication
- `Mail` - Email contact
- `Phone` - Phone contact
- `MessageCircle` - Chat/support
- `Calendar` - Appointments

### Security & Trust
- `Shield` - Security & protection
- `Lock` - Privacy & encryption
- `CheckCircle` - Verification
- `Award` - Certifications

### Navigation
- `Menu` - Mobile menu
- `X` - Close button
- `ChevronRight` - Next/forward
- `ChevronLeft` - Previous/back
- `ArrowRight` - Call to action
- `ExternalLink` - External links

## Best Practices

### 1. Consistent Sizing
```tsx
// Good - Consistent sizing
<div className="flex gap-4">
  <IconComponent className="w-6 h-6" />
  <IconComponent className="w-6 h-6" />
  <IconComponent className="w-6 h-6" />
</div>
```

### 2. Semantic Colors
```tsx
// Use semantic colors
<Check className="text-green-500" />     // Success
<X className="text-red-500" />           // Error
<AlertCircle className="text-yellow-500" /> // Warning
<Info className="text-blue-500" />       // Information
```

### 3. Accessibility
```tsx
// Always include aria-label for screen readers
<Mail className="w-5 h-5" aria-label="Email us" />

// Or use with visible text
<button className="flex items-center gap-2">
  <Mail className="w-4 h-4" aria-hidden="true" />
  <span>Contact us via email</span>
</button>
```

## Performance Tips

### 1. Tree Shaking
Import only the icons you need:
```tsx
// ✅ Good - Only imports what you use
import { Star, Heart } from 'lucide-react';

// ❌ Avoid - Imports entire library
import * as Lucide from 'lucide-react';
```

### 2. Memoization for Dynamic Icons
```tsx
import { memo } from 'react';
import { Star } from 'lucide-react';

const MemoizedStar = memo(Star);
```

### 3. Icon Components
Create reusable icon components:
```tsx
export const FeatureIcon = ({ icon: Icon, className = "" }) => (
  <Icon className={`w-8 h-8 ${className}`} />
);

// Usage
<FeatureIcon icon={Shield} className="text-green-500" />
```

## Migration from Custom SVGs

### Replace Custom Arrows
```tsx
// Before
import { ButtonArrow } from './Icons';
<span className="w-4 h-4"><ButtonArrow /></span>

// After  
import { ArrowRight } from 'lucide-react';
<ArrowRight className="w-4 h-4" />
```

### Replace Checkmarks
```tsx
// Before
import { ChecklistTick } from './Icons';

// After
import { Check } from 'lucide-react';
<Check className="w-5 h-5 text-green-500" />
```

## Troubleshooting

### Icons Not Showing
1. Check if the icon is imported correctly
2. Verify the icon name is spelled correctly
3. Check for CSS conflicts (display: none, visibility, etc.)

### Wrong Colors
1. Ensure `currentColor` is working (inherits from parent)
2. Check Tailwind classes are applied correctly
3. Verify no CSS overrides

### Size Issues
1. Use consistent units (w-4 h-4 vs size={16})
2. Check parent container constraints
3. Verify no CSS max-width/height restrictions

## Next Steps
1. Browse all available icons at: https://lucide.dev/icons/
2. Replace your custom SVG icons with Lucide equivalents
3. Create consistent icon patterns across your components
4. Consider creating wrapper components for common icon usage patterns

## Example Components to Update
- Replace `ButtonArrow` with `ArrowRight`
- Replace `ChecklistTick` with `Check`
- Replace navigation arrows with `ChevronLeft`/`ChevronRight`
- Add contact icons to footer and contact sections
- Add feature icons to service cards

Happy icon-ing! 🎨