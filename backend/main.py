from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

from src.api import users, projects, tasks
from src.database import Base, engine
from src.models import user, project, task, feature_branch

app = FastAPI()

origins = [
    "http://localhost:3000",  # Local React frontend
    "http://localhost:8000",  # Local FastAPI backend
    "https://quantum-flow-git-001-the-ultimate-outcome-roy-hodges-projects.vercel.app", # Vercel deployed frontend
    "https://quantumflow-otmr.onrender.com", # Render.com deployed backend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(users.router)
app.include_router(projects.router)
app.include_router(tasks.router)

Base.metadata.create_all(bind=engine)

# Create a default user if one doesn't exist
from src.database import SessionLocal
from src.models.user import User

def create_default_user():
    db = SessionLocal()
    try:
        default_user = db.query(User).filter(User.id == 1).first()
        if not default_user:
            new_user = User(email="test@example.com", hashed_password="testpassword") # In a real app, hash this password!
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            logger.info("Default user created: test@example.com")
    except Exception as e:
        logger.error(f"Error creating default user: {e}")
    finally:
        db.close()

create_default_user()

@app.get("/")
def read_root():
    logger.info("Root endpoint accessed")
    return {"Hello": "World"}
