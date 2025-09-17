from fastapi import FastAPI
import logging

from src.api import users, projects, tasks

app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(users.router)
app.include_router(projects.router)
app.include_router(tasks.router)

@app.get("/")
def read_root():
    logger.info("Root endpoint accessed")
    return {"Hello": "World"}
