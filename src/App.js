import './App.css';
import QuoteBox from "./Components/QuoteBox"
import Jump from "./Components/Jump"
import {useEffect} from "react"

function App() {

  /* useEffect(() => {
      const quoteBox = document.getElementById("quoteBox-style")
      quoteBox.style.backgroundColor("red")
  }) */

  return (
    <div>
      <div className="appStyle">
        <QuoteBox />
      </div>
      {/* <Jump jump={jump}/> */}
    </div>
  );
}

export default App;
