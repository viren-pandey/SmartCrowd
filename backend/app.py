from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from detector import run_detector_thread, results_data, cap
import cv2

app = FastAPI()

# Allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Start YOLO detection
run_detector_thread()


@app.get("/stats")
def get_stats():
    return results_data


@app.get("/video_feed")
def video_feed():
    def generate():
        while True:
            ret, frame = cap.read()
            if not ret:
                continue

            ret, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()

            # Streaming frame
            yield (b"--frame\r\n"
                   b"Content-Type: image/jpeg\r\n\r\n" +
                   frame_bytes +
                   b"\r\n")

    return StreamingResponse(generate(),
                             media_type="multipart/x-mixed-replace; boundary=frame")
