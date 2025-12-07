

# 📌 **SmartCrowd – Real-Time Crowd Monitoring System**

SmartCrowd is a simple full-stack AI project that uses a webcam and computer vision to detect people in real time, calculate crowd density, and show everything on a live dashboard.

It helps monitor areas that can get crowded such as events, campuses, malls, and gatherings.
The system can show:

* 👥 Total number of people
* 🔥 Zone-wise heatmap
* 🚨 Alerts (Safe, Warning, or Critical)
* 🎥 Live camera feed

---

# 🛠️ **Technologies Used**

### **Backend (AI + Server)**

* Python
* FastAPI
* OpenCV
* YOLOv8 (Ultralytics)
* Uvicorn

### **Frontend (Dashboard UI)**

* React.js
* Vite
* JavaScript + CSS

---

# 📥 **How to Download / Clone the Project**

Anyone can download this project to their own computer using Git.

## **1️⃣ Clone the Repository**

Open a terminal and run:

```
git clone https://github.com/viren-pandey/SmartCrowd.git
```

Then go inside the folder:

```
cd SmartCrowd
```

---

# ▶️ **2️⃣ How to Run the Backend**

Open a terminal:

```
cd backend
```

Install dependencies:

```
pip install -r requirements.txt
```

Run the server:

```
python -m uvicorn app:app --reload --host 127.0.0.1 --port 8000
```

Backend will start at:

👉 **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

# 💻 **3️⃣ How to Run the Frontend**

Open a second terminal:

```
cd frontend
npm install
npm run dev
```

Frontend will start at something like:

👉 **[http://localhost:5173](http://localhost:5173)**

---

# 🎉 **You're Ready to Use SmartCrowd!**

Once both servers are running:

* The app shows a live dashboard
* People are detected in real time
* Heatmap and alerts update every second


