const Jump = ({jump}) => {
    return(
        <div id="jump-container">
            <h2 id="bored">Bored?</h2>
            <button id="jump-button" onClick={jump}>Jump!</button>
        </div>
        
    )
}

export default Jump