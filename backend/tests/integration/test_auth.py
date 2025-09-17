from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_user_registration_and_login():
    # Register a new user
    response = client.post("/users/", json={"email": "test@example.com", "password": "password"})
    assert response.status_code == 200
    user = response.json()
    assert user["email"] == "test@example.com"

    # Login with the new user
    response = client.post("/token", data={"username": "test@example.com", "password": "password"})
    assert response.status_code == 200
    token = response.json()
    assert "access_token" in token
