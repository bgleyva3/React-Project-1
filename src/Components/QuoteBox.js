import Print from "./Print"
import Share from "./Share"
import Generate from "./Generate"
import {useState, useEffect, useRef} from "react"
import Core from "./Core"


const QuoteBox = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [fontSize, setFontSize] = useState("3rem")
    const [data, setData] = useState([])
    const quoteText = useRef(null)
    const quoteContainer = useRef(null)
    const [displayColor, setDisplayColor] = useState({color: "#423d3700"})

    useEffect(() => {
        Core.addCommand("quote-value", setQuote1)
        Core.addCommand("actual-data", setActualData1)
    }, [])
    
// Esta función ES candidata a un callBack Hook porque no depende de ningún cambio de estado
    const newQuote = () => {
        let randomNum = Math.round(Math.random()*(data.length-1))
        Core.exec("quote-value", data[randomNum]["quote"])
        //setQuote(data[randomNum]["quote"])
        setAuthor(data[randomNum]["author"])
        setFontSize("3rem")
        setDisplayColor({color: "#423d3700"})
    }

// Esta NO es candidata a un callBack Hook porque useEffect ya controla su Renderizado
    const setQuote1 = (e) => {
        setQuote(e)
    }
    const setActualData1 = (e) => {
        setData(e)
    }

    useEffect (() => {
        const arrayColors = ["#bdd2b6","#2978b5","#897853","#025955","#ee9595","#4b778d","#de8971","#03506f","#a0937d","#b7657b","#a7d0cd","#766161","#ffc996","#ca8a8b","#bee5d3","#845460","#c64756","#2b2e4a"];
        const colorNumber = Math.round(Math.random()*arrayColors.length)
        document.body.style.backgroundColor = arrayColors[colorNumber];
        
    }, [quote])

// Esta NO es candidata a un callBack Hook porque useEffect ya controla su Renderizado
    useEffect(() => {
        let quoteHeight = quoteText.current.clientHeight
        let containerHeight = quoteContainer.current.clientHeight
        if(quoteHeight > containerHeight){
            setFontSize(parseFloat(fontSize)-0.1 + "rem")
        }else{
            setDisplayColor({color: "#423d37"})
        }
    }, [quote, fontSize])

// Esta NO es candidata a un callBack Hook porque solo se ejecuta una sola vez
    useEffect(() => {
        const url = "https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt"
        fetch(url)
            .then(res => res.json())
            .then(actualData =>{
                Core.exec("actual-data", actualData.quotes)
                //setData(actualData.quotes)
            })
    }, [])

    // Esta función NO es candidata a un callBack hook porque useEffect ya controla su Renderizado
    useEffect(() => {
        if(data.length>0){
            newQuote();
        }
        
    }, [data])

    return(
        <div className="quoteBox-style">
            <div>
                <div className="pin-container">
                    <img className="pin" src="pin.png" />
                    <img className="pin" src="pin.png" />
                </div>
                <Print displayColor={displayColor} quote={quote} author={author} quoteRef={quoteText} containerRef={quoteContainer} fontSize={fontSize}/>
                <div className="flex-buttons">
                    <Share quote={quote} author={author}/>
                    <Generate action={newQuote} />
                </div>
            </div>
        </div> 
    )
}

export default QuoteBox;