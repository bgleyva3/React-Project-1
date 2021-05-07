import Print from "./Print"
import Share from "./Share"
import Generate from "./Generate"
import Quote from "./Quote"
import {useState, useEffect, useRef} from "react"


const QuoteBox = () => {

    const quoteLength = Quote["quotes"].length-1;
    let randomNum = Math.round(Math.random()*quoteLength)
    const initQuote = Quote["quotes"][randomNum]["quote"]
    const initAuthor = Quote["quotes"][randomNum]["author"]

    const [quote, setQuote] = useState(initQuote);
    const [author, setAuthor] = useState(initAuthor);
    const [fontSize, setFontSize] = useState("3rem")
    const [data, setData] = useState([])
    const quoteText = useRef(null)
    const quoteContainer = useRef(null)
    

    const newQuote = () => {
        randomNum = Math.round(Math.random()*quoteLength)
        quoteHandler(randomNum)
        authorHandler(randomNum)
        document.body.style.backgroundColor = randomColor()
        setFontSize("3rem")
    }

    const randomColor = () => {
        const arrayColors = ["#bdd2b6","#2978b5","#897853","#025955","#ee9595","#4b778d","#de8971","#03506f","#a0937d","#b7657b","#a7d0cd","#766161","#ffc996","#ca8a8b","#bee5d3","#845460","#c64756","#2b2e4a"];
        const colorNumber = Math.round(Math.random()*arrayColors.length)
        return(arrayColors[colorNumber])
    }

    document.body.style.backgroundColor = randomColor()

    const quoteHandler = (randomNum) => {
        setQuote(Quote["quotes"][randomNum]["quote"])
    }

    const authorHandler = (randomNum) => {
        setAuthor(Quote["quotes"][randomNum]["author"])
    }

    useEffect(() => {
        let quoteHeight = quoteText.current.clientHeight
        let containerHeight = quoteContainer.current.clientHeight
        if(quoteHeight > containerHeight){
            setFontSize(parseFloat(fontSize)-0.1 + "rem")
        }
    }, [quote, fontSize])

    useEffect(() => {
        const url = "https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt"
        fetch(url)
            .then(res => res.json())
            .then(actualData =>{
                console.log(actualData)
                setData(actualData.quotes)
            })
    }, [])


    return(
        <div className="quoteBox-style">
            <div>
                <Print quote={quote} author={author} quoteText={quoteText} quoteContainer={quoteContainer} fontSize={fontSize}/>
                <div className="flex-buttons">
                    <Share quote={quote} author={author}/>
                    <Generate action={newQuote} />
                </div>
            </div>
        </div> 
    )
}

export default QuoteBox;