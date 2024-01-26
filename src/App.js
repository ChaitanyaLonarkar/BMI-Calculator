import "./App.css";
import { useState } from "react";

function App() {
  const [height, setHeight]=useState('')
  const [weight, setWeight]=useState('')
  const [bmii, setbmii]=useState('')
  const [message, setMessage] = useState('')

  let result=(e)=>{
    e.preventDefault()
    if (weight===0 || height===0){
      alert("Please enter valid weight and height.")
    }
    else{
      let bmi=weight/((height/100)*(height/100))
      setbmii(bmi.toFixed(1))
      
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
  return (
    <div className="App">
      <form className="bmi">
        <h3>BMI Calculator</h3>
        
        <input type="number" id="weight" placeholder="Enter weight" onChange={(e) => setWeight(e.target.value)} />
        
        <input type="number" id="height" placeholder="Enter height" onChange={(event) => setHeight(event.target.value)} />
        <button type="submit" className="btn" onClick={result}>Submit</button>
        <button type="reset" className="btn">Reset</button>
        <div className="result">
          <h3>Your BMI is :{bmii}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
