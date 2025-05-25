# SaaS Dashboard (Next.js Full-Stack)

A modern SaaS dashboard web application built with Next.js (TypeScript), TailwindCSS, MongoDB (Mongoose), JWT authentication, and more.

## Features
- User registration & login (JWT, bcrypt password hashing)
- Protected dashboard with sidebar navigation
- Analytics widgets (dummy stats, charts)
- CRUD for Projects (create, read, update, delete)
- Dark mode toggle
- Responsive UI with TailwindCSS
- Enhanced dashboard UI: user profile, notification bell, PRO badge, grid widgets
- Simple charts (Chart.js)
- Organized code: separate API routes, React hooks (SWR)
- Dockerfile for containerized deployment

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

### Setup
1. **Clone the repo**
   ```sh
   git clone https://github.com/your-username/saas-dashboard.git
   cd saas-dashboard
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**
   - Copy `.env.example` to `.env.local` and fill in your MongoDB URI and JWT secret.
4. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server

### Docker
To build and run with Docker:
```sh
docker build -t saas-dashboard .
docker run -p 3000:3000 --env-file .env.local saas-dashboard
```

## Folder Structure
- `/src/app/api/auth` — Auth API routes (register, login, user)
- `/src/app/api/projects` — Project CRUD API routes
- `/src/app/dashboard` — Main dashboard UI (enhanced layout, widgets, profile, etc.)
- `/src/components` — UI components (Sidebar, DashboardWidgets, Projects, etc.)
- `/src/hooks` — Custom React hooks (SWR)
- `/src/lib` — Mongoose connection, JWT helpers
- `/src/models` — Mongoose models

## License
MIT
