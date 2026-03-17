import { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import InputBar from './components/InputBar'
import './App.css'
import AdvanceInput from './components/AdvanceInput'
import Answers from './components/Answers'

function App() {
  const [isAdvance, setIsAdvance] = useState(false);
  const [inputValue, setInputValue] = useState(""); 
  const [answers, setAnswers] = useState([]);
  const [context, setContext] = useState("");
  const [role, setRole] = useState("");
  const [task, setTask] = useState("");
  const [format, setFormat] = useState("");
    

  const handleSubmit = async () => {

    const res = await fetch("http://localhost:5000/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({
      input: inputValue
    })
  });

  const data = await res.json();

  setAnswers([...answers, data.answer]); 
  setInputValue("");
}

  const handleAdvanceSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      context,
      role,
      task,
      format
    })
  });

  const data = await res.json();

  setAnswers([...answers, data.answer]);

  setContext("");
  setRole("");
  setTask("");
  setFormat("");
  }

  const styles = {
    container: {
      display: "flex",
      flexDirection: 'column',
      width: "100vw",
      height: "100vh",
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    bottomRow: {      
      gap: "64px",  
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginBottom: '50px',
      position: 'sticky'    
    },
    scrollArea: {
      flex: 1,
      width: "100%",
      overflowY: "auto",         
      padding: "16px 0",         
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.scrollArea}>
     {answers.map((text,index) => (
      <Answers key={index} text={text}/>
     ))}
      </div>
      <div style={styles.bottomRow}>
        {isAdvance ? (
          <AdvanceInput
            context={context} setContext={setContext}
            role={role} setRole={setRole}
            task={task} setTask={setTask}
            format={format} setFormat={setFormat}
            onSubmit={handleAdvanceSubmit}
          />
        ) : (
          <InputBar
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSubmit={handleSubmit}
          />
        )}
        <ToggleButton onClick={() => setIsAdvance(!isAdvance)} />
      </div>
    </div>
  );
}

export default App;