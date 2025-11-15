# Lithic Style Guide

## Overview
This style guide documents the design system used on the Lithic website (www.lithic.com). It captures the visual language, components, and patterns that create a consistent user experience across the platform. The Lithic design system emphasizes clean typography, strategic use of purple brand colors, and modern, developer-friendly UI components.

## Color Palette

### Primary Colors
- **Brand Purple:** `#5C2999` - Used for primary buttons, active states, and key UI elements
- **Dark Purple:** `rgba(92, 41, 153, 0.2)` - Used for inactive states and subtle backgrounds

### Neutral Colors
- **White:** `#FFFFFF` - Background color and text on dark backgrounds
- **Black:** `#000000` - Primary text color
- **Gray Shades:**
  - Light gray backgrounds
  - Medium gray for secondary text
  - Dark gray for borders and dividers

## Typography

### Font Families
The website uses a clean, modern sans-serif typeface system optimized for both readability and developer-friendly aesthetics.

### Font Weights
- **Regular:** Used for body text and general content
- **Medium/Semi-bold:** Used for subheadings and emphasized text
- **Bold:** Used for headings and important UI elements

### Font Sizes
- Base font size: `1rem` (16px)
- Responsive scaling:
  ```css
  html {
      font-size: 1rem;
  }
  
  @media screen and (max-width:1470px) {
      html {
          font-size: calc(0.4245824634655532rem + 0.6263048016701462vw);
      }
  }
  
  @media screen and (max-width:991px) {
      html {
          font-size: 1rem;
      }
  }
  ```

### Text Styles
- **Headings:** Bold, with specific size hierarchy
- **Body Text:** Regular weight, with optimized legibility
- **Links:** Inherit color with subtle underline (0.28rem offset, 1px thickness)
- **Text Truncation:**
  ```css
  /* Apply "..." after specific lines of text */
  .text-style-5lines {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
  }
  
  .text-style-3lines {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
  }
  
  .text-style-2lines {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  ```

### Text Rendering
```css
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}
```

## Spacing System

The spacing system uses a consistent `rem`-based approach for margins and paddings:

### Margin and Padding Utilities
```css
.margin-0 {
    margin: 0rem !important;
}

.padding-0 {
    padding: 0rem !important;
}

.spacing-clean {
    padding: 0rem !important;
    margin: 0rem !important;
}
```

### Directional Spacing
The system includes utilities for controlling spacing in specific directions:
- `.margin-top`, `.padding-top`
- `.margin-right`, `.padding-right`
- `.margin-bottom`, `.padding-bottom`
- `.margin-left`, `.padding-left`
- `.margin-horizontal`, `.padding-horizontal`
- `.margin-vertical`, `.padding-vertical`

### Container Sizing
```css
.container-medium,
.container-small,
.container-large {
    margin-right: auto !important;
    margin-left: auto !important;
}
```

## Component Styles

### Buttons
- Primary buttons use the brand purple color
- Hover states include subtle transitions
- Consistent padding and border-radius

### Navigation
- Clean, minimal navigation style
- Active states use the brand purple color
- Mobile-responsive navigation with hamburger menu

### Cards
- Clean white background
- Subtle shadows for elevation
- Consistent padding and spacing

### Tabs
```css
.tab-content-item.active {
    display: flex !important;
}

.tab-content-item:not(.active) {
    display: none !important;
}

.tab-img-item.active {
    display: block !important;
}

.tab-img-item:not(.active) {
    display: none !important;
}
```

### Timer Ring Component
```css
.tab-timer-ring {
    transform: rotate(-90deg);
    transform-origin: center;
}

.tab-timer-bg {
    fill: none;
    stroke: rgba(92, 41, 153, 0.2);
    stroke-width: 3;
}

.tab-timer-progress {
    fill: none;
    stroke: #5C2999;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 75.4;
    stroke-dashoffset: 75.4;
}
```

### Slider/Carousel
```css
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
    opacity: 0.2;
    cursor: default;
}

.swiper-slide:not(:last-child) {
    margin-right: 4rem;
}
```

## Shadows & Elevation

The design uses subtle shadows to create depth and hierarchy:
- Light shadows for cards and elevated components
- Stronger shadows for modals and popups
- Consistent use of box-shadow with rgba values for depth

## Animations & Transitions

### Tab Transitions
```css
.tab-images {
    position: relative;
    overflow: hidden;
}

.tab-img-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
```

### Timer Animation
The site uses SVG-based timer animations with stroke-dasharray and stroke-dashoffset for circular progress indicators.

## Border Radius

The design uses consistent border-radius values:
- Small radius (approximately 4-8px) for buttons and form elements
- Medium radius for cards and containers
- Circular radius (50%) for avatar elements and some icons

## Opacity & Transparency

- Disabled elements: `opacity: 0.2`
- Overlay backgrounds: various rgba values with transparency
- Gradient masks:
  ```css
  .logos-main {
      mask: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  }
  ```

## Responsive Design

### Media Queries
```css
@media screen and (max-width: 1470px) {
    /* Large screen adjustments */
}

@media screen and (max-width: 991px) {
    /* Tablet adjustments */
    .hide,
    .hide-tablet {
        display: none !important;
    }
}

@media screen and (max-width: 767px) {
    /* Mobile landscape adjustments */
    .hide-mobile-landscape {
        display: none !important;
    }
}

@media screen and (max-width: 479px) {
    /* Mobile portrait adjustments */
    .hide-mobile {
        display: none !important;
    }
}
```

### Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Utility Classes

### Visibility
```css
.hide {
    display: none !important;
}
```

### Scrollbar Handling
```css
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
```

### Form Elements
```css
.is-textarea {
    resize: none;
}
```

### Link Styling
```css
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
    color: inherit;
    text-decoration: inherit;
    font-size: inherit;
    text-underline-offset: 0.28rem;
    text-decoration-thickness: 1px;
}

a,
.swiper-arrow-button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    text-underline-offset: 0.3rem;
}
```

## Example Component Reference Design Code

### Tab Component with Timer
```html
<div class="tab-component">
  <div class="tab-navigation">
    <div class="tab-button active">Tab 1</div>
    <div class="tab-button">Tab 2</div>
    <div class="tab-timer">
      <svg width="30" height="30" viewBox="0 0 30 30">
        <circle class="tab-timer-bg" cx="15" cy="15" r="12"></circle>
        <circle class="tab-timer-progress" cx="15" cy="15" r="12"></circle>
      </svg>
    </div>
  </div>
  <div class="tab-content">
    <div class="tab-content-item active">
      Content for tab 1
    </div>
    <div class="tab-content-item">
      Content for tab 2
    </div>
  </div>
  <div class="tab-images">
    <div class="tab-img-item active">
      <img src="image1.jpg" alt="Tab 1 image">
    </div>
    <div class="tab-img-item">
      <img src="image2.jpg" alt="Tab 2 image">
    </div>
  </div>
</div>
```

### Button Component
```html
<a href="#" class="button primary">
  <div class="button-text">Get Started</div>
  <div class="button-icon">→</div>
</a>
```

### Card Component
```html
<div class="card">
  <div class="card-icon">
    <img src="icon.svg" alt="Feature icon">
  </div>
  <h3 class="card-heading">Feature Title</h3>
  <p class="card-text text-style-3lines">
    Feature description that might be long enough to be truncated after three lines of text.
  </p>
  <a href="#" class="card-link">Learn more</a>
</div>
```

## Best Practices

1. **Consistency**: Maintain consistent spacing, typography, and color usage across all components
2. **Accessibility**: Ensure sufficient color contrast and text legibility
3. **Responsive Design**: Test all components across different screen sizes
4. **Performance**: Optimize images and minimize CSS/JS for faster loading
5. **Maintainability**: Use the established class naming conventions and structure