"""Backend tests for Aesthetics Boutique API"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestHealthAndRoot:
    """Health check tests"""

    def test_api_root(self):
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "running"

    def test_get_enquiries_returns_list(self):
        response = requests.get(f"{BASE_URL}/api/enquiries")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


class TestEnquiryAPI:
    """Enquiry CRUD tests"""

    def test_post_enquiry_valid(self):
        payload = {
            "name": "TEST_User",
            "phone": "9876543210",
            "email": "test@test.com",
            "service": "Designer Sarees",
            "message": "Test message"
        }
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "TEST_User"
        assert data["phone"] == "9876543210"
        assert data["service"] == "Designer Sarees"
        assert "id" in data
        assert "created_at" in data

    def test_post_enquiry_minimal(self):
        payload = {
            "name": "TEST_Minimal",
            "phone": "9123456789",
            "service": "Beauty Parlour"
        }
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "TEST_Minimal"

    def test_post_enquiry_missing_required_field(self):
        payload = {"name": "TEST_Missing"}
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert response.status_code == 422

    def test_enquiry_persisted_in_db(self):
        payload = {
            "name": "TEST_Persist",
            "phone": "9000000001",
            "service": "Bridal Lehengas",
            "message": "persistence check"
        }
        post_response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert post_response.status_code == 200

        get_response = requests.get(f"{BASE_URL}/api/enquiries")
        assert get_response.status_code == 200
        enquiries = get_response.json()
        names = [e["name"] for e in enquiries]
        assert "TEST_Persist" in names
