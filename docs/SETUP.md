# Clowd Website - Setup Instructions

## Quick Start

Follow these steps to get the Clowd website up and running:

### 1. Install Dependencies
Open PowerShell in the project directory and run:
```powershell
npm install
```

### 2. Replace Logo Files

**IMPORTANT:** The website currently uses placeholder SVG logos. You need to replace them with your actual logo images.

Copy your logo images from the `logo/` folder to `public/`:

```powershell
# Option 1: If your logos are already in the correct format
Copy-Item .\logo\logo-icon-white.png .\public\logo-icon-white.svg -Force
Copy-Item .\logo\logo-icon-black.png .\public\logo-icon-black.svg -Force

# Option 2: If your logos have different names
Copy-Item .\logo\[your-white-logo-filename] .\public\logo-icon-white.svg -Force
Copy-Item .\logo\[your-black-logo-filename] .\public\logo-icon-black.svg -Force
```

**Note:** The logo files should be:
- `logo-icon-white.svg` - White logo for dark backgrounds (used in header/footer)
- `logo-icon-black.svg` - Black logo for light backgrounds

If your logos are in PNG/JPG format instead of SVG, you can:
1. Keep them as PNG/JPG
2. Update the file extensions in these files:
   - `src/components/Header.jsx`
   - `src/components/Footer.jsx`
   - `src/components/home/Hero.jsx`

### 3. Start Development Server

```powershell
npm run dev
```

The website will open automatically at `http://localhost:3000`

### 4. Customize Content (Optional)

Before deploying, you may want to update:

1. **Contact Information** (`src/components/Footer.jsx` and `src/pages/Contact.jsx`):
   - Email address
   - Phone number
   - Physical address

2. **Company Details** (`src/pages/About.jsx`):
   - Company story
   - Team information

3. **Use Cases** (`src/data/useCasesData.js`):
   - Customize statistics
   - Update case studies
   - Modify industry lists

### 5. Build for Production

When ready to deploy:

```powershell
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 6. Preview Production Build

```powershell
npm run preview
```

## File Structure Overview

```
Clowd/
├── public/              # Static files (logos, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── data/           # Data files (use cases info)
│   └── index.css       # Global styles
├── package.json        # Dependencies
└── README.md           # Full documentation
```

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Run `npm install` again

### Issue: Logo not showing
**Solution:** 
1. Check that logo files exist in `public/` folder
2. Verify file names match exactly: `logo-icon-white.svg` and `logo-icon-black.svg`
3. Check browser console for errors

### Issue: Port 3000 already in use
**Solution:** The dev server will automatically use a different port (3001, 3002, etc.)

### Issue: Styles not applying
**Solution:** 
1. Stop the dev server (Ctrl+C)
2. Delete `node_modules` folder
3. Run `npm install` again
4. Run `npm run dev`

## Next Steps

1. ✅ Install dependencies
2. ✅ Replace logo files
3. ✅ Start dev server and preview
4. 📝 Customize content (email, phone, etc.)
5. 🚀 Build and deploy

## Need Help?

Check the main README.md for:
- Detailed deployment instructions
- Color customization guide
- Contact form integration
- Full feature documentation

---

**Ready to launch? Run `npm run dev` and start building! 🚀**
