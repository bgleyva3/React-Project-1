const Print = ({quote, author, quoteText, quoteContainer, fontSize}) => {

    /* document.getElementById("quoteBox").outerHTML += `${resize()}` */

    return(
        <div>
            <div id="quote-container" ref={quoteContainer}>
                <h1 id="quote" ref={quoteText} style={{fontSize: fontSize}}>“{quote}</h1>
            </div>
            <h2 id="author" className="author-position">-{author}</h2>
        </div>
    )
}

export default Print;