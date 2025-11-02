# Clowd - AI-Driven Solutions for Business Excellence

A modern, premium website for Clowd - an AI-driven solutions company based in Jeddah, Saudi Arabia. Built with React, Tailwind CSS, and Framer Motion.

![Clowd Logo](./public/logo-icon-black.svg)

## 🚀 About Clowd

Clowd bridges the gap between AI capability and business execution. We create intelligent automation solutions that help businesses:

- Reduce operational costs by up to 40%
- Automate repetitive tasks
- Make faster, data-driven decisions
- Scale operations efficiently

## 📋 Features

### 🌓 Theme System
- **Dark/Light Mode Toggle** - Smooth transitions between themes
- **Persistent Preferences** - Theme choice saved in localStorage
- **System Preference Detection** - Respects OS dark mode setting
- **Automatic Logo Switching** - Shows correct logo variant for each theme

### Pages
- **Home** - Hero section, problem statement, solutions, use cases, and newsletter
- **Use Cases** - 5 detailed AI solution pages:
  - Supply Chain & Logistics Intelligence
  - Intelligent Document Processing
  - Predictive Demand Forecasting
  - AI-Powered Customer Service
  - Financial Intelligence & Fraud Detection
- **About** - Company story, mission, and values
- **Contact** - Multi-purpose contact forms (consultation, demo, general inquiry)

### Technical Features
- ⚡ Built with **Vite** for lightning-fast development
- ⚛️ **React 18** with modern hooks and Context API
- 🎨 **Tailwind CSS** with dark mode support
- 🎭 **Framer Motion** for smooth animations
- 🧭 **React Router** for seamless navigation
- 🌓 **Dark/Light Theme** with persistent preferences
- 📱 Fully **responsive** design
- ♿ **Accessible** components
- 🎯 **SEO-optimized** structure
- 🖼️ **Real logo integration** with automatic switching

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Logos Already Integrated! ✅**
   - Your logos from the `logo/` folder are already integrated
   - The following logos are used:
     - `logo.jpeg` - Main logo (light theme header)
     - `logo_inverted.jpeg` - Inverted logo (dark theme/dark backgrounds)
     - `logo_text.jpeg` - Text logo (light theme)
     - `logo_text_inverted.jpeg` - Text logo (dark theme)
     - `logo_with_text_inverted.jpeg` - Footer logo
   - Logos automatically switch based on theme selection

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```
   
5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
Clowd/
├── public/                 # Static assets
│   ├── logo-icon-white.svg
│   └── logo-icon-black.svg
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── home/         # Home page sections
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── UseCases.jsx
│   │   ├── UseCaseDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data files
│   │   └── useCasesData.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

- **Primary Blue**: `#0A1F44` - Trust, technology, corporate
- **Accent Cyan**: `#00D4FF` - Innovation, AI, future
- **Charcoal**: `#1A1A1A` - Text and dark elements
- **Warning Orange**: `#FF6B35` - CTAs and urgency
- **Light Gray**: `#F5F7FA` - Backgrounds

## 🔧 Customization

### Update Company Information

Edit these files to update company details:
- `src/components/Footer.jsx` - Contact information
- `src/pages/About.jsx` - Company story and values
- `src/pages/Contact.jsx` - Contact details

### Modify Use Cases

Edit `src/data/useCasesData.js` to update use case content, statistics, and case studies.

### Change Colors

Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#0A1F44',
    // ... your colors
  },
  // ...
}
```

## 📧 Contact Form Integration

The contact forms currently use simulated submissions. To integrate with a real backend:

1. **Update `src/pages/Contact.jsx`:**
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('loading');
     
     try {
       const response = await fetch('YOUR_API_ENDPOINT', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData),
       });
       
       if (response.ok) {
         setStatus('success');
         setFormData({ name: '', email: '', company: '', phone: '', message: '' });
       } else {
         setStatus('error');
       }
     } catch (error) {
       setStatus('error');
     }
   };
   ```

2. Popular options:
   - **EmailJS** - Client-side email sending
   - **Formspree** - Simple form backend
   - **Custom API** - Your own backend service

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/Clowd"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d dist"
npm run deploy
```

## 📝 TODO

- [ ] Replace placeholder SVG logos with actual logo images
- [ ] Update contact information (email, phone)
- [ ] Integrate real contact form backend
- [ ] Add Google Analytics or tracking
- [ ] Set up email newsletter service
- [ ] Add social media links
- [ ] Implement blog section (optional)
- [ ] Add client testimonials (optional)

## 🤝 Contributing

This is a proprietary project for Clowd. For any modifications or suggestions, please contact the development team.

## 📄 License

© 2025 Clowd. All rights reserved.

---

**Built with ❤️ in Jeddah, Saudi Arabia**
