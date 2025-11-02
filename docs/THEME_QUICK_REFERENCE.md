# 🎨 Theme & Logo Quick Reference

## Theme Toggle Location

**Desktop:** Top navigation bar, between nav links and CTA button
**Mobile:** Next to hamburger menu icon (top right)

## Logo Files & Usage

### Header Logos (Navigation Bar)
| Theme | Icon Logo | Text Logo |
|-------|-----------|-----------|
| Light | `logo.jpeg` | `logo_text.jpeg` |
| Dark | `logo_inverted.jpeg` | `logo_text_inverted.jpeg` |

### Footer Logo
- **Always:** `logo_with_text_inverted.jpeg` (white version)
- Footer background is always dark

### Hero Section Logo
- **Always:** `logo_inverted.jpeg` (white version)
- Hero has dark gradient background

## Theme Behavior

### Persistence
- Theme choice is saved in `localStorage`
- Persists across page reloads and sessions
- Key: `theme`, Value: `'light'` or `'dark'`

### Initial Load
1. Checks localStorage for saved preference
2. If no preference, checks system settings (`prefers-color-scheme`)
3. Defaults to light if neither is set

### Switching Themes
- Click toggle in navigation
- Smooth 300ms transition
- Logos switch instantly
- All colors adapt automatically

## Dark Mode Colors

### Backgrounds
- **Light Mode:** White (`#FFFFFF`) and Light Gray (`#F5F7FA`)
- **Dark Mode:** Dark Gray (`#1A1A1A` / gray-900) and Medium Dark (`gray-800`)

### Text
- **Light Mode:** Black/Dark Gray (`#1A1A1A`)
- **Dark Mode:** White/Light Gray (`#F5F5F5` / gray-100)

### Components
- **Cards:** White → Dark Gray (`gray-800`)
- **Borders:** Light Gray → Dark Gray (`gray-700`)
- **Gradients:** Maintained in both modes
- **Accent Colors:** Consistent across themes

## Technical Implementation

### Context
```jsx
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

### Logo Switching Pattern
```jsx
<img 
  src={theme === 'dark' ? '/logo_inverted.jpeg' : '/logo.jpeg'}
  alt="Clowd"
/>
```

### Dark Mode Classes
```jsx
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

## Quick Fixes

### Logo Not Showing?
1. Check file exists in `/public/` folder
2. Verify exact filename (case-sensitive)
3. Check browser console for errors

### Theme Not Persisting?
1. Check localStorage in DevTools
2. Clear cache and reload
3. Check ThemeProvider is wrapping App

### Wrong Logo in Theme?
1. Check theme value in React DevTools
2. Verify conditional logic in component
3. Check file paths are correct

## Files to Edit

### To Change Logos:
- `src/components/Header.jsx` (navigation)
- `src/components/Footer.jsx` (footer)
- `src/components/home/Hero.jsx` (hero section)

### To Modify Theme Logic:
- `src/context/ThemeContext.jsx` (theme state)
- `src/components/ThemeToggle.jsx` (toggle UI)

### To Adjust Colors:
- `tailwind.config.js` (color palette)
- `src/index.css` (custom utilities)

## Testing Checklist

- [ ] Click theme toggle - changes instantly
- [ ] Refresh page - theme persists
- [ ] All logos switch correctly
- [ ] Text remains readable in both modes
- [ ] No flash of wrong theme on load
- [ ] Works on mobile devices
- [ ] Forms and inputs themed properly
- [ ] Hover states work in both modes

## Browser DevTools

### Check Theme State:
1. Open React DevTools
2. Find ThemeProvider
3. Check `theme` value

### Check localStorage:
1. Open Application tab
2. Local Storage → localhost
3. Look for `theme` key

### Debug Logo:
1. Right-click logo → Inspect
2. Check `src` attribute
3. Network tab shows file loading

---

**Everything is working! ✅**
Theme toggle is in the navigation bar - try it now! 🌓
