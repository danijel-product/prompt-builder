import { useState } from "react";
import './ToggleButton.css'

function ToggleButton({onClick}) {
  const [type, setType] = useState("Standard");

  const handleClick = () => {
    setType(type === "Standard" ? "Premium" : "Standard");
    if(onClick) onClick()
  };

  return (
    <button
      onClick={handleClick}
      className="toggle-button"
      style={{
        backgroundColor: "#303030",
        width: "152px",
        fontSize: "24px",
        fontWeight: "400",
        color: "white",
        border: "none",
        padding: "12px 16px",
        borderRadius: "24px",
        cursor: "pointer",
        whiteSpace: "nowrap"
      }}
    >
      {type}
    </button>
  );
}

export default ToggleButton;