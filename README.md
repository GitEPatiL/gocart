<div align="center">
  <img src="public/favicon.png" width="120" height="120" alt="YourCart Logo">
  <h1>YourCart</h1>
  <p><strong>A Premium E-Commerce Experience</strong></p>
  <p>
    Built with React, Vite, Tailwind CSS (v4), and GSAP for fluid scrolling animations.
  </p>
</div>

---

## 📖 Overview

**YourCart** is a modern, ultra-premium frontend for an e-commerce platform. Originally migrated from Next.js, this project has been fully rebuilt into a blazing-fast Single Page Application (SPA) using **Vite** and **React**.

The application features a unique **"Dragon Blade" theme**, offering a striking combination of deep slate backgrounds with fiery red and orange gradients. To elevate the user experience, we've integrated **GSAP ScrollTrigger** animations to smoothly fade in products and sections as users navigate the shop.

## ✨ Features

- **Blazing Fast SPA:** Instant navigation and hot module replacement powered by Vite.
- **GSAP Scroll Animations:** High-performance fade-up and scrolling animations for a highly interactive feel.
- **Dragon Blade Theme:** A custom luxury brand UI with vibrant red/orange elements against a dark slate canvas.
- **Premium Mock Data:** Pre-populated with luxury pricing to mimic a high-end storefront environment (Prices in ₹ INR).
- **Responsive Design:** Fully mobile-optimized with Tailwind CSS v4.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS (v4)
- **Animations:** GSAP & `@gsap/react`
- **State Management:** Redux Toolkit
- **Icons:** Lucide React

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and install the dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```text
http://localhost:5173
```

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will output the finalized assets into the `dist` directory.

---

## 📂 Project Structure

```text
├── public/              # Static assets (Favicon, robots.txt)
├── src/
│   ├── assets/          # Static images, dummy data, logos
│   ├── components/      # Reusable UI components (Hero, Navbar, etc.)
│   ├── layouts/         # Layout wrappers for Public, Admin, and Store
│   ├── lib/             # Redux store and slices
│   ├── pages/           # Application route pages
│   ├── App.jsx          # Central router and layout configuration
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # React application entry point
├── .env                 # Environment variables
├── index.html           # Main HTML document
└── vite.config.js       # Vite configuration
```

## 📝 Editing the App

You can start editing the application by modifying `src/pages/Home.jsx` or any of the components in the `src/components/` directory. The page auto-updates in real-time as you save your files.

---

<div align="center">
  Made with ❤️ using React & Vite.
</div>
