import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// 🔹 Ye component ek simple "Back" button hai
// 🔹 Jab user click karega, wo previous page pe chala jayega

export default function BackButton() {
  // 🔹 useNavigate React Router ka hook hai
  // 🔹 Isse hum programmatically navigation control kar sakte hain
  const navigate = useNavigate();

  return (
    // 🔹 Button jo click hone par ek step peeche le jata hai (history me -1)
    <button
      className="back-btn"
      onClick={() => navigate(-1)} // 🔹 -1 ka matlab previous page
      aria-label="Go back" // 🔹 accessibility ke liye (screen readers)
    >
      {/* 🔹 Left arrow icon (UI ke liye) */}
      <ArrowLeft size={16} strokeWidth={1.8} />
    </button>
  );
}
