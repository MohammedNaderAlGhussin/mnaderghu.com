# Professional Full-Stack Portfolio

A high-performance, modern, and multilingual portfolio website built with **Next.js**, **TypeScript**, and **Framer Motion**. This project showcases advanced web development skills, featuring a responsive design, real-time animations, and a production-ready contact system.

---

## 🚀 Live Demo
**[mnaderghu.com](https://mnaderghu.com/)**

---

## 📸 Screenshots

### Home Page
![Home Page](/public/screenshots/home.png)

### About Page
![About Page](/public/screenshots/about.png)

### Projects Page
![Projects Page](/public/screenshots/projects.png)

---

## ✨ Key Features

- **🌐 Multilingual Support (i18n)**: Fully translated into **English**, **Arabic (RTL)**, and **German** using `i18next`.
- **📧 Production Contact Form**: Integrated with **Resend API** for reliable email delivery with server-side validation.
- **✨ Premium UI/UX**:
  - Dynamic backgrounds and floating particles.
  - Smooth page transitions and scroll-driven animations using **Framer Motion**.
  - Glassmorphism effects and modern typography.
- **📱 Fully Responsive**: Optimized for all devices from 320px mobile to ultra-wide desktops.
- **🛠️ Tech Stack**:
  - **Framework**: Next.js 15+ (App Router)
  - **Language**: TypeScript (Strict Mode)
  - **Styling**: Tailwind CSS & Lucide Icons
  - **Animation**: Framer Motion & Aceternity UI components
  - **Forms**: React Hook Form & Zod Validation
  - **Email**: Resend

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MohammedNaderAlGhussin/mohammednaderalghussin.me.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory and add your Resend API Key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
   *(See `.env.example` for reference)*

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
├── actions/          # Server actions (Email handling)
├── app/              # Next.js App Router (Localized /[locale] routes)
├── components/       # Reusable React components & UI kits
├── locales/          # Translation JSON files (EN, AR, DE)
├── public/           # Static assets (CV, Images)
└── lib/              # Utility functions & shared config
```

---

## 🤝 Contact

**MohammedNader AlGhussin**  
Full-Stack Developer  
📍 Cairo, Egypt (Remote Friendly)  
📧 [mohammendnaderalghussin@gmail.com](mailto:mohammendnaderalghussin@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/mohammednader-alghussin) | [GitHub](https://github.com/MohammedNaderAlGhussin)

---

*Designed and engineered with passion.*
