const Print = ({quote, author}) => {

    /* document.getElementById("quoteBox").outerHTML += `${resize()}` */

    return(
        <div>
            <div id="quote-container">
                <h1 id="quote" >“{quote}</h1>
            </div>
            <h2 className="author-position">-{author}</h2>
        </div>
    )
}

export default Print;