import React from "react";

function Answers({ text }) {
  const styles = {
    container: {
      width: "880px",                  
      margin: "16px auto",         
      backgroundColor: "#2a2a2a", 
      borderRadius: "12px",
      padding: "16px 20px",
      color: "white",
      fontSize: "16px",
      lineHeight: "1.6",
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      wordBreak: "break-word",
    }
  };

  return <div style={styles.container}>{text}</div>;
}

export default Answers;