import './App.css';
import QuoteBox from "./Components/QuoteBox"
/* import Jump from "./Components/Jump" */
import {useEffect} from "react"

function App() {

  /* useEffect(() => {
      const quoteBox = document.getElementById("quoteBox-style")
      quoteBox.style.backgroundColor("red")
  }) */
  console.log("ESTOY SOLO")
  useEffect(() => {
    console.log ("Estoy aquí")
  },[])
 
  return (
    <div>
      <div className="appStyle">
        {/* <h1 className="text-1">Quotes fetched from API</h1> */}
        <QuoteBox />
      </div>
      {/* <Jump jump={jump}/> */}
    </div>
  );
}

export default App;
