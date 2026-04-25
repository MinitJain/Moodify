import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ onClick = () => {} }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");
  const [cameraError, setCameraError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    init({ landmarkerRef, videoRef, streamRef }).catch((err) => {
      if (!cancelled) {
        console.error("FaceExpression init error:", err);
        setCameraError(
          err?.name === "NotAllowedError"
            ? "Camera permission denied. Please allow camera access."
            : `Error: ${err?.message || "Unknown error"}`,
        );
      }
    });

    return () => {
      cancelled = true;
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
        landmarkerRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  async function handleClick() {
    const expression = detect({ landmarkerRef, videoRef, setExpression });
    if (!expression) return;
    onClick(expression);
  }

  if (cameraError) return <p style={{ color: "red" }}>{cameraError}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={handleClick}>Detect expression</button>
    </div>
  );
}
