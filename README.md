# SmartCrowd 🚀

A full‑stack, hackathon‑grade application designed to demonstrate **real‑world problem solving**, **scalable architecture**, and **clean engineering practices**. This README is intentionally detailed so that *any reviewer, contributor, or evaluator* can understand the project end‑to‑end without confusion.

---
link : [https://smartcrowd.netlify.com/](https://smartcrowd.netlify.app/)

## 📌 Project Description

**SmartCrowd** is a data‑driven web application focused on intelligent crowd analysis, risk detection, and simulation‑based insights. The goal of the project is to transform raw data into **actionable intelligence** using modern frontend frameworks and a robust backend.

The project was built under time pressure (hackathon conditions), which makes the architectural decisions, trade‑offs, and mistakes especially valuable to document.

---

## 🎯 Core Objectives

* Build a **real‑world usable product**, not a demo
* Maintain **clear separation of frontend and backend**
* Handle API failures and edge cases gracefully
* Follow **clean code and scalable structure**
* Be deployable with minimal changes

---

## 🧠 High‑Level Architecture

```
Frontend (React + Vite)
        ↓ API Calls (REST)
Backend (FastAPI)
        ↓
Data Processing / Simulation Logic
```

* Frontend handles **UI, routing, and user interaction**
* Backend handles **business logic, simulations, and data processing**

---

## 🛠 Tech Stack

### Frontend

* **React** – Component‑based UI
* **Vite** – Fast development bundler
* **TypeScript / JavaScript** – Safer and scalable code
* **CSS / Tailwind (if used)** – Styling

### Backend

* **Python** – Core backend language
* **FastAPI** – High‑performance API framework
* **Uvicorn** – ASGI server

### Tooling & DevOps

* **Git & GitHub** – Version control
* **Node.js & npm** – Frontend dependency management
* **Virtual Environment (venv)** – Python isolation

---

## 📂 Folder Structure

```
SmartCrowd/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.tsx
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   └── services/
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation Guide (Step‑by‑Step)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/viren-pandey/SmartCrowd.git
cd SmartCrowd
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Run backend:

```bash
python -m uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables (IMPORTANT)

Create a `.env` file if required:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

⚠️ **Never commit `.env` files to GitHub**

---

## 📡 API Flow Explanation

1. Frontend triggers API call on page load or user action
2. Backend processes simulation / logic
3. Response is returned as JSON
4. Frontend updates UI dynamically

Error handling is done on **both frontend and backend** to avoid crashes.

---

## 📚 Libraries & Dependencies Explained

### Frontend Libraries

* `react` → UI rendering
* `react-router-dom` → Page navigation
* `axios / fetch` → API communication

### Backend Libraries

* `fastapi` → API framework
* `pydantic` → Data validation
* `uvicorn` → Server runtime

---

## 🧪 Common Errors & How to Fix Them

### ❌ "Module has no exported member"

**Cause:** Wrong import/export usage

✅ Fix:

```js
import Component from "./Component"
```

---

### ❌ Frontend Page Blank Screen

**Cause:** Routing mismatch or component not exported

✅ Fix:

* Check `App.tsx`
* Ensure correct default exports

---

### ❌ Backend Not Starting

**Cause:**

* Wrong Python version
* Missing dependencies

✅ Fix:

```bash
pip install -r requirements.txt
```

---

## 🚧 Mistakes That Happened (Honest Section)

* Accidentally pushing a **Git submodule instead of folder**
* Frontend folder getting deleted due to wrong git command
* Import/export mismatches in React
* Assuming API response structure without validation

These mistakes improved the **final robustness** of the project.

---

## ⚠️ Mistakes That Can Happen (Be Careful)

* Forgetting to start backend before frontend
* Hardcoding API URLs
* Pushing `.env` files
* Mixing business logic inside UI components

---

## 🔮 Future Improvements

* Authentication & authorization
* Database integration
* Better error monitoring
* Production deployment (Docker + Cloud)
* Unit & integration testing

---

## 🤝 Contribution Guidelines

1. Fork the repo
2. Create a feature branch
3. Commit clean, descriptive messages
4. Open a Pull Request

---

## 📜 License

This project is open‑source and intended for **learning, showcasing skills, and collaboration**.

---

