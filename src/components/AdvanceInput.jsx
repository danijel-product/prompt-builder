import InputBar from "./InputBar";
import arrowIcon from '../assets/up-arrow.png'
import './AdvanceInput.css'

function AdvanceInput({context, setContext, 
  role, setRole, 
  task, setTask, 
  format, setFormat, 
  onSubmit }) {
  const styles = {
    container: {
      width: "758px",
      maxWidth: "calc(100% - 0px)",
      height: "auto",
      minHeight: "416px",
      backgroundColor: "#181818",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      borderRadius: '8px',
      position: "relative" 
    },

    group: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "24px"
    },

    lastGroup: {
      display: "flex",
      gap: 16,
      alignItems: 'center',
    },

    label: {
      color: "white",
      fontSize: "20px",
      marginBottom: "6px"
    },
    Button: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "none",
      background: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container} className="advance-input-container">
      
      <div style={styles.group}>
        <label style={styles.label}>Context</label>
        <InputBar style={{width: '688px'}} 
         value={context}
         onChange={(e) => setContext(e.target.value)}
         onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
         }}/>
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Role</label>
        <InputBar style={{width: '688px'}} 
         value={role}
         onChange={(e) => setRole(e.target.value)}
         onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
         }}/>
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Task</label>
        <InputBar style={{width: '688px'}}
         value={task}
         onChange={(e) => setTask(e.target.value)}
         onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
         }}/>
      </div>
      <div style={styles.lastGroup}>
        <div style={styles.group}>
        <label style={styles.label}>Format</label>
        <InputBar style={{width: '688px'}}
         value={format}
         onChange={(e) => setFormat(e.target.value)}
         onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
         }}/>
      </div>
       <button style={styles.Button} onClick={onSubmit}>
        <img src={arrowIcon} alt="up arrow" />
      </button>
      </div>
    </div>
  );
}

export default AdvanceInput;