# 🎯 Trivia — AI Career Guidance & Industry Insights Platform

Welcome to **Trivia**, a modern AI-powered web application that provides **industry insights**, **career guidance**, and **AI-generated tools** such as resumes, cover letters, and interview preparation — all in one place.

This project leverages cutting-edge AI (Google Gemini / OpenAI) to help users boost their professional journey.

---

## 🚀 Features

- 🧠 **AI-Powered Insights** — Get real-time analytics and reports on industries.
- 💼 **Resume Builder** — Generate ATS-friendly resumes with a single click.
- ✉️ **AI Cover Letter Generator** — Tailored letters for any job role.
- 🎓 **Interview Preparation** — Practice interviews with AI.
- 👤 **Clerk Authentication** — Secure and modern login/signup.
- 📊 **Dashboard** — Centralized access to tools and insights.
- 💫 **Floating Capsule Header** — Responsive, animated, and minimal.
- 🌈 **Framer Motion Animations** — Smooth and elegant transitions.
- ☁️ **Vercel Deployment** — Automatic builds and continuous integration.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 14** | Full-stack React framework |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations and transitions |
| **Clerk Auth** | Authentication system |
| **Prisma ORM** | Database management |
| **Google Gemini AI / OpenAI** | AI-driven features |
| **Vercel** | Deployment and hosting |

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/trivia.git
cd trivia
```
### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```
### 3️⃣ Create Environment Variables

Create a file named .env.local in your project root and add:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
DATABASE_URL=your_database_url
GOOGLE_API_KEY=your_google_api_key
```
### 4️⃣ Run the Development Server
npm run dev
Now visit 👉 http://localhost:3000
