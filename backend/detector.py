import cv2
import threading
import numpy as np
from ultralytics import YOLO

# Load YOLO model once
model = YOLO("yolov8n.pt")

# Global camera object
cap = cv2.VideoCapture(0)

# Shared detection results
results_data = {
    "total_count": 0,
    "zones": [0, 0, 0, 0],
    "level": "SAFE",
    "error": None
}

def start_detection():
    if not cap.isOpened():
        results_data["error"] = "Camera not available"
        return

    while True:
        ret, frame = cap.read()
        if not ret:
            results_data["error"] = "Frame read error"
            continue

        # YOLO inference
        result = model(frame, verbose=False)[0]

        boxes = result.boxes
        humans = []

        for box in boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])

            if cls == 0 and conf > 0.35:  # detect people
                x1, y1, x2, y2 = box.xyxy[0]
                cx = int((x1 + x2) / 2)
                humans.append(cx)

        total_people = len(humans)

        # Divide frame into 4 horizontal zones
        h, w = frame.shape[:2]
        zone_width = w // 4
        zone_counts = [0, 0, 0, 0]

        for cx in humans:
            zi = min(cx // zone_width, 3)
            zone_counts[zi] += 1

        # Determine crowd level
        if total_people > 15 or max(zone_counts) > 8:
            level = "CRITICAL"
        elif total_people > 7 or max(zone_counts) > 5:
            level = "WARNING"
        else:
            level = "SAFE"

        results_data["total_count"] = total_people
        results_data["zones"] = zone_counts
        results_data["level"] = level
        results_data["error"] = None


# Run detection in background thread
def run_detector_thread():
    thread = threading.Thread(target=start_detection, daemon=True)
    thread.start()
