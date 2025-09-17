from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_project():
    response = client.post("/projects/", json={"name": "Test Project", "description": "A test project"})
    assert response.status_code == 200
    assert response.json()["name"] == "Test Project"
