import Print from "./Print"
import Share from "./Share"
import Generate from "./Generate"
import {useState, useEffect, useRef} from "react"


const QuoteBox = () => {

    let randomNum = ""

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [fontSize, setFontSize] = useState("3rem")
    const [data, setData] = useState([])
    const quoteText = useRef(null)
    const quoteContainer = useRef(null)
    

    const newQuote = () => {
        randomNum = Math.round(Math.random()*(data.length-1))
        console.log(randomNum)
        setQuote(data[randomNum]["quote"])
        setAuthor(data[randomNum]["author"])
        document.body.style.backgroundColor = randomColor()
        setFontSize("3rem")
    }

    const randomColor = () => {
        const arrayColors = ["#bdd2b6","#2978b5","#897853","#025955","#ee9595","#4b778d","#de8971","#03506f","#a0937d","#b7657b","#a7d0cd","#766161","#ffc996","#ca8a8b","#bee5d3","#845460","#c64756","#2b2e4a"];
        const colorNumber = Math.round(Math.random()*arrayColors.length)
        return(arrayColors[colorNumber])
    }

    document.body.style.backgroundColor = randomColor()


    useEffect(() => {
        let quoteHeight = quoteText.current.clientHeight
        let containerHeight = quoteContainer.current.clientHeight
        if(quoteHeight > containerHeight){
            setFontSize(parseFloat(fontSize)-0.1 + "rem")
        }
    }, [quote, fontSize])

    useEffect(() => {
        console.log("su")
        const url = "https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt"
        fetch(url)
            .then(res => res.json())
            .then(actualData =>{
                
                setData(actualData.quotes)
            })
    }, [])

    useEffect(() => {
        console.log(data)
        console.log("HEEEEY")
        if(data.length>0){
            newQuote();
        }
        
    }, [data])
    console.log("YO")
    /* console.log(data)
    console.log(data.length)
    console.log(data[3])
    console.log(data[3]["quote"])
    console.log(data[3]["author"]) */

    return(
        <div className="quoteBox-style">
            <div>
                <Print quote={quote} author={author} quoteRef={quoteText} containerRef={quoteContainer} fontSize={fontSize}/>
                <div className="flex-buttons">
                    <Share quote={quote} author={author}/>
                    <Generate action={newQuote} />
                </div>
            </div>
        </div> 
    )
}

export default QuoteBox;