# 🚀 Project Management System

Welcome to the Project Management System! This application helps you manage your projects, tasks, and team members efficiently. It features a robust backend API built with FastAPI, a dynamic frontend with React and TypeScript, and automated CI/CD workflows.

## ✨ Features

- **User Authentication**: Secure login and registration.
- **Project Management**: Create, view, update, and delete projects (full CRUD).
- **Task Tracking**: Assign and track tasks within projects.
- **Automated Workflows**: CI/CD pipeline with GitHub Actions for seamless integration and deployment.
- **Agent-Driven Development**: Designed to integrate with AI agents for enhanced development workflows.

## 🛠️ Technologies Used

**Backend**:
- Python 🐍
- FastAPI ⚡
- PostgreSQL 🐘
- SQLAlchemy (ORM) & Alembic (Migrations)

**Frontend**:
- React ⚛️
- TypeScript 📘
- React Router DOM

**DevOps & Tools**:
- Docker & Docker Compose 🐳
- GitHub Actions 🚀
- Ruff & Black (Python linting/formatting)
- ESLint & Prettier (TypeScript/React linting/formatting)

## 🚀 Getting Started

Follow these steps to get your development environment up and running.

### Prerequisites

Make sure you have the following installed:
- Docker & Docker Compose
- Node.js (LTS) & npm (for frontend development, though Docker handles most of it)
- Python 3.11+ (for backend development, though Docker handles most of it)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd project-management-system
```

### 2. Start the Application

Use Docker Compose to build and start the database, backend, and frontend services:

```bash
docker-compose up --build -d
```

This command will:
- Build Docker images for the backend and frontend.
- Start the PostgreSQL database service.
- Start the FastAPI backend service.
- Start the React frontend service.

### 3. Run Database Migrations

Once the database and backend are up, run the migrations to create the schema. You might need to wait a few moments for the database to be fully ready.

```bash
source backend/venv/bin/activate # Activate backend virtual environment
alembic -c alembic.ini upgrade head
```

### 4. Access the Application

- **Frontend**: `http://localhost:3000`
- **Backend API (Swagger UI)**: `http://localhost:8000/docs`

## 🚀 Deployment Strategy

This application is designed for a split deployment:
-   **Frontend**: Deployed as a static site (e.g., Vercel, Netlify, GitHub Pages).
-   **Backend**: Deployed to a cloud provider that supports Docker containers and PostgreSQL (e.g., Render.com, AWS ECS, Google Cloud Run).

### Deploying the Frontend to Vercel

Vercel provides seamless integration with GitHub for deploying modern web applications.

1.  **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com/) using your GitHub account.
2.  **Import Your GitHub Repository**: From your Vercel dashboard, click "New Project" and import your project's GitHub repository.
3.  **Configure Project**: Vercel will usually auto-detect your React app. Ensure the "Root Directory" is set to `frontend/`.
4.  **Environment Variables**: If your deployed backend has a public URL, you'll need to set an environment variable in Vercel for your frontend to connect to it. For example, `REACT_APP_API_BASE_URL` set to your backend's URL.
5.  **Deploy**: Click "Deploy". Vercel will build and deploy your frontend, and set up automatic deployments for future pushes to your `main` branch.

## ⚙️ CI/CD with GitHub Actions

This project includes a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) to automate building and pushing Docker images for the backend and frontend.

### Setup Steps:

1.  **GitHub Secrets**: Add the following secrets to your GitHub repository settings (Settings > Secrets > Actions):
    *   `DOCKER_USERNAME`: Your Docker Hub username.
    *   `DOCKER_PASSWORD`: Your Docker Hub access token or password.
2.  **Update Docker Image Names**: In `.github/workflows/ci-cd.yml`, replace `your-backend-repo` and `your-frontend-repo` with your actual Docker repository names.

### How it Works:

-   The workflow triggers on pushes to the `main` branch.
-   It builds and pushes Docker images for the backend and frontend to your configured Docker registry.
-   These images can then be used for deploying your backend to a cloud provider.

## 🧪 Running Tests

### Backend Tests

```bash
cd backend
source venv/bin/activate
pytest tests/
cd ..
```

### Frontend Tests

```bash
cd frontend
npm test
cd ..
```

## 🤝 Contributing

We welcome contributions! Please follow the established coding standards and submit pull requests for new features or bug fixes.

## 📄 License

This project is licensed under the MIT License.
