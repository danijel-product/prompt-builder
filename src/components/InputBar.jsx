import plusIcon from '../assets/Plus-button.png'
import voiceIcon from '../assets/mingcute_voice-line.png'


function InputBar({style, value, onChange, onSubmit}) { 
 const styles = {
    container: {
      backgroundColor: "#303030",
      width: "758px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      borderRadius: "24px",
    },
    input: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      fontSize: "14px",
      marginLeft: "16px",
      marginRight: "16px",
      color: 'white'
    },
    rightButton: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "none",
      background: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: '8px'
    },

    leftButton: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: '8px'
    },
    icon: {
        width: "10",
        height: "14",
    }
  };

  return (
    <div style={{...styles.container,...style}}>
      <button style={styles.leftButton}>
        <img src={plusIcon} style={styles.icon} />
      </button>

      <input
        type="text"
        placeholder="Ask anything"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if(e.key === 'Enter') onSubmit()
        }}
        style={styles.input}
      />

      <button style={styles.rightButton}>
        <img src={voiceIcon} style={styles.icon} />
      </button>
    </div>
  );
}

export default InputBar;