const Share = ({quote, author}) => {


    const quoteArray = quote.split(" ")
    const authorArray = author.split(" ")

    let completePhrase ="“"
    for(let i=0; i<quoteArray.length; i++){
        completePhrase += quoteArray[i] + "%20"
    }
    completePhrase += "”%20-"


    for(let j=0; j<authorArray.length; j++){
        completePhrase += authorArray[j] + "%20"
    }

    let fullUrl = "https://twitter.com/intent/tweet?text=" + completePhrase +"Twitter&url=http%3A%2F%2FmyProjectPage.com&via=myProjectPage&hashtags=unHashtagAqui"


    return(
        <a href={fullUrl}><i class="fab fa-twitter-square fa-3x icon-color"></i></a>
    )
}

export default Share;