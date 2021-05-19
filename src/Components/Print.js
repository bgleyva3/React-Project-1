const Print = ({quote, author, quoteRef, containerRef, fontSize, displayColor}) => {

    return(
        <div>
            <div id="quote-container" style={displayColor} ref={containerRef}>
                <h1 id="quote" ref={quoteRef} style={{fontSize: fontSize}}>“{quote}</h1>
            </div>
            <h2 id="author" className="author-position">-{author}</h2>
        </div>
    )
}

export default Print;