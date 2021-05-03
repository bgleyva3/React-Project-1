import Print from "./Print"
import Share from "./Share"
import Generate from "./Generate"
import Quote from "./Quote"
import {useState, useEffect} from "react"


const QuoteBox = () => {

    const quoteLength = Quote["quotes"].length-1;
    let randomNum = Math.round(Math.random()*quoteLength)
    const initQuote = Quote["quotes"][randomNum]["quote"]
    const initAuthor = Quote["quotes"][randomNum]["author"]

    const [quote, setQuote] = useState(initQuote);
    const [author, setAuthor] = useState(initAuthor);
    const [originalFontSize, setOriginalFontSize] = useState(0);
    

    const newQuote = () => {
        randomNum = Math.round(Math.random()*quoteLength)
        quoteHandler(randomNum)
        authorHandler(randomNum)
        /* resizeToFit() */
        document.body.style.backgroundColor = randomColor()
    }

    const randomColor = () => {
        const arrayColors = ["#897853","#025955","#26001b","#ee9595","#f7a440","#de8971","#6930c3","#03506f","#a0937d","#b7657b","#a7d0cd","#766161","#ffc996","#f5f7b2","#ca8a8b","#bee5d3","#845460","#c64756","#e84545","#2b2e4a"];
        const colorNumber = Math.round(Math.random()*arrayColors.length)
        return(arrayColors[colorNumber])
    }

    document.body.style.backgroundColor = randomColor()
//-------------------------RESIZE TEXT--------------------------------------
    useEffect(() => {

        let output = document.getElementById("quote")
        let outputContainer = document.getElementById("quote-container")
        let fontSize = window.getComputedStyle(output).fontSize;  

        const resizeToFit = () => {   
            output = document.getElementById("quote")
            outputContainer = document.getElementById("quote-container")
            fontSize = window.getComputedStyle(output).fontSize;   
            output.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
    
            if(output.clientHeight >= outputContainer.clientHeight){
                resizeToFit();
            }
        }


        if(originalFontSize === 0){
            setOriginalFontSize(parseFloat(fontSize) + 'px')
            resizeToFit();
        }else{
            output.style.fontSize = originalFontSize
            resizeToFit();
        }
        
    })
//---------------------------------------------------------------------
    const quoteHandler = (randomNum) => {
        setQuote(Quote["quotes"][randomNum]["quote"])
    }

    const authorHandler = (randomNum) => {
        setAuthor(Quote["quotes"][randomNum]["author"])
    }

    return(
        <div className="quoteBox-style">
            <div>
                <Print quote={quote} author={author} />
                <div className="flex-buttons">
                    <Share quote={quote} author={author}/>
                    <Generate action={newQuote}/>
                </div>
            </div>
        </div> 
    )
}

export default QuoteBox;