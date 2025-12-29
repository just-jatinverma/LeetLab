<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" alt="Next.js Logo" width="80" height="80" />
    </a>
  <br />

  <h1>🚀 LeetCode Clone</h1>
  
  <p>
    A comprehensive, modern coding challenge platform built to help you master algorithms and data structures. Practice, compete, and improve your skills in a clean, responsive environment.
  </p>

  <p>
    <a href="https://github.com/yourusername/leet-code/commits/main">
      <img src="https://img.shields.io/github/last-commit/yourusername/leet-code?style=flat-square&logo=git&logoColor=white&color=0080ff" alt="Last Commit" />
    </a>
    <a href="https://github.com/yourusername/leet-code/issues">
      <img src="https://img.shields.io/github/issues/yourusername/leet-code?style=flat-square&logo=github&logoColor=white&color=0080ff" alt="Issues" />
    </a>
    <a href="https://github.com/yourusername/leet-code/pulls">
      <img src="https://img.shields.io/github/issues-pr/yourusername/leet-code?style=flat-square&logo=github&logoColor=white&color=0080ff" alt="Pull Requests" />
    </a>
    <a href="https://github.com/yourusername/leet-code/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/yourusername/leet-code?style=flat-square&logo=mit&logoColor=white&color=0080ff" alt="License" />
    </a>
  </p>
</div>

<hr />

## ✨ Features

Provides a premium developer experience with a thoughtfully designed architecture and modern user interface.

- **🧩 Collaborative Code Editor**: Integrated with Monaco Editor (the engine behind VS Code) with syntax highlighting, auto-completion, and support for multiple languages (Javascript, Python, Java).
- **⚡ Real-time Code Execution**: Blazing fast compilation and testing powered by the **Judge0** API. Run code against custom or pre-defined test cases instantly.
- **🔐 Secure Authentication**: Enterprise-grade user management and session handling via **Clerk**. Support for seamless sign in/up.
- **🎨 Modern, Accessible UI**: Beautifully crafted interface using **Tailwind CSS 4** and **shadcn/ui**. Fully responsive, with a premium design aesthetic.
- **🏗️ Full-Stack Architecture**: Taking full advantage of **Next.js 16** App Router, Server Components, React 19, and Server Actions for optimal performance.
- **📊 Robust Data Management**: **PostgreSQL** database managed gracefully by **Prisma** ORM.
- **📝 Comprehensive Problem Management**:
  - Rich text markdown descriptions for problems.
  - Granular difficulty levels and categorization tags.
  - Test case validations.

## 🛠️ Tech Stack

<details>
  <summary><strong>View Detailed Tech Stack</strong></summary>
  <br />

| Category               | Technologies                                                               |
| ---------------------- | -------------------------------------------------------------------------- |
| **Frontend**           | Next.js 16 (App Router), React 19, Tailwind CSS 4, Lucide Icons, shadcn/ui |
| **Backend**            | Next.js Server Actions, Node.js                                            |
| **Database**           | PostgreSQL, Prisma ORM                                                     |
| **Auth**               | Clerk                                                                      |
| **Execution Engine**   | RapidAPI (Judge0 CE)                                                       |
| **Forms & Validation** | React Hook Form, Zod                                                       |

</details>

<br />

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed to ensure a smooth development environment:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) database (local or hosted like Supabase/Neon)
- A [Clerk](https://clerk.com/) account for authentication
- A [RapidAPI](https://rapidapi.com/) account subscribed to the Judge0 CE API

### Quickstart

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/leet-code.git
   cd leet-code
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/leetcode_db"

   # Auth (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Judge0 (RapidAPI)
   RAPIDAPI_KEY="your_rapidapi_key"
   RAPIDAPI_HOST="judge0-ce.p.rapidapi.com"
   JUDGE0_API_URL="https://judge0-ce.p.rapidapi.com"
   ```

4. **Database Database Synchronization**
   Push the Prisma schema to your database to create the necessary tables:

   ```bash
   npx prisma db push
   # or npx prisma migrate dev
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   _Your application will now be running at [http://localhost:3000](http://localhost:3000)._

## 📂 Project Structure

```text
leet-code/
├── app/                  # Next.js App Router (Pages, Layouts, API routes)
│   ├── (auth)/           # Clerk Auth layouts and pages
│   ├── (root)/           # App landing & marketing
│   └── api/              # API Endpoints
├── components/           # Reusable UI components & shadcn/ui elements
├── hooks/                # Custom React hooks
├── lib/                  # Utilities, DB clients, Judge0 helper
├── modules/              # Domain-driven feature modules (Auth, Problems)
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Made with ❤️ using Next.js & Tailwind CSS.
</div>
