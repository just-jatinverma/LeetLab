# 🚀 NextJS LeetCode Clone

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Prisma](https://img.shields.io/badge/Prisma-6.0-green)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

A comprehensive coding challenge platform built with modern web technologies. Practice algorithms, create custom problems, and master data structures in a beautiful, responsive environment.

## ✨ Features

-   **🧩 Collaborative Code Editor**: Powered by Monaco Editor (VS Code), supporting multiple languages (JS, Python, Java).
-   **⚡ Real-time Execution**: Integration with **Judge0** for instant code compilation and testing.
-   **🔐 Secure Authentication**: Robust user management via **Clerk**.
-   **🎨 Modern UI/UX**: Built with **Tailwind CSS 4** and **shadcn/ui** for a premium, accessible design.
-   **🏗️ Full-Stack Architecture**:
    -   **App Router**: Leveraging Next.js 16 server components.
    -   **Database**: PostgreSQL managed by Prisma ORM.
    -   **Role-Based Access**: separate flows for Admins (problem creation) and Users.
-   **📝 Problem Management**:
    -   Rich text descriptions.
    -   Test case validation.
    -   Difficulty levels and tagging system.

## 🛠️ Tech Stack

-   **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS 4, Lucide React
-   **Backend**: Server Actions, Prisma ORM
-   **Database**: PostgreSQL
-   **Auth**: Clerk
-   **Code Execution**: RapidAPI (Judge0)
-   **Forms**: React Hook Form + Zod

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   PostgreSQL Database
-   Clerk Account
-   RapidAPI Account (for Judge0)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/leet-code.git
    cd leet-code
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Setup**
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

4.  **Database Migration**
    ```bash
    npx prisma migrate dev
    ```

5.  **Run Development Server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── (auth)/           # Authentication routes
│   ├── (root)/           # App landing & marketing
│   └── api/              # API Routes
├── modules/              # Feature-based logic modules
│   ├── auth/             # Authentication & User Sync
│   ├── problems/         # Problem management & lists
├── components/           # Shared UI components
├── lib/                  # Utilities, DB client, Judge0
└── prisma/               # Database schema
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
