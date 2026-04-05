# The Traveling Prince Platform

A high-performance, production-ready content distribution engine for the "Traveling Prince" brand. Built for high-end travel storytelling, real-time adventure tracking, and cinematic media delivery.

## 🏛️ System Architecture

### 1. Frontend Architecture
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) for hybrid static/dynamic rendering.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom "Mission Control" glassmorphism design system.
- **Icons**: [Lucide React](https://lucide.dev/) for consistent, lightweight vector iconography.
- **Components**: Modular React architecture with a clear separation between Server-Side (SEO) and Client-Side (Interactive) components.

### 2. Data Connectivity & API Layer
- **Adventure Engine**: REST API integration (hosted on Render) that serves dynamically generated travel journals and itineraries.
- **Cinema Gallery**: Real-time YouTube RSS feed integration for automated video content updates.
- **Live Metrics**: `/metrics` dashboard providing real-time visibility into the backend blog generation engine.

### 3. SEO & Production Infrastructure
- **Dynamic Metadata**: Custom `generateMetadata` implementation for per-page unique SEO titles and social sharing markers.
- **Search Engine Discovery**: Automated `sitemap.xml` and `robots.txt` generation.
- **Serverless Communications**: Functional contact form powered by [Web3Forms](https://web3forms.com/).
- **CI/CD**: Fully automated deployment pipeline via **GitHub** and **Vercel**.

## 🚀 Key Features

- **Blog Discovery**: Client-side real-time search and 10-item pagination for the 200+ article archive.
- **60/40 Hero Layout**: Performance-optimized hero section balancing featured content with personal branding.
- **Prince's Cinema**: A theater-mode video gallery with curated playlist collections (Sacred Temples, Char Dham, etc.).
- **Trust Suite**: Integrated legal infrastructure including FAQ, Privacy Policy, and Terms of Service.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Language** | JavaScript (ES6+) |
| **Logic** | React 19 / Next.js 15 |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Deployment** | Vercel |
| **Asset Mgmt** | Next.js Image Optimization |

## 📦 Getting Started

1. **Clone & Install**:
   ```bash
   git clone https://github.com/kumarprinceGenAI/Traveling-Prince-Platform.git
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://travel-blog-generator.onrender.com
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   ```

---
**© 2026 The Traveling Prince | Built for the Great Indo-China Wanderlust.**
