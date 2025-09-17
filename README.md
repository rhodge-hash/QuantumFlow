# 🚀 Project Management System

Welcome to the Project Management System! This application helps you manage your projects, tasks, and team members efficiently. It features a robust backend API built with FastAPI, a dynamic frontend with React and TypeScript, and automated CI/CD workflows.

## ✨ Features

- **User Authentication**: Secure login and registration.
- **Project Management**: Create, view, update, and delete projects.
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
- Node.js (LTS) & npm
- Python 3.11+

### 1. Clone the Repository

```bash
git clone <repository-url>
cd project-management-system
```

### 2. Set up the Backend

Navigate to the `backend` directory and install dependencies:

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
```

### 3. Set up the Frontend

Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
cd ..
```

### 4. Start the Application

Use Docker Compose to start the database, backend, and frontend services:

```bash
docker-compose up --build -d
```

### 5. Run Database Migrations

Once the database is up, run the migrations to create the schema:

```bash
source backend/venv/bin/activate
alembic -c alembic.ini upgrade head
```

### 6. Access the Application

- **Backend API**: `http://localhost:8000`
- **Frontend**: `http://localhost:3000`

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
