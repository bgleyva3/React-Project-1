const Share = ({quote, author}) => {

    console.log(quote)
    console.log(author)
    const quoteArray = quote.split(" ")
    const authorArray = author.split(" ")
    console.log(quoteArray)
    console.log(authorArray)
    let completePhrase ="“"
    for(let i=0; i<quoteArray.length; i++){
        completePhrase += quoteArray[i] + "%20"
    }
    completePhrase += "”%20-"
    console.log(completePhrase)

    for(let j=0; j<authorArray.length; j++){
        completePhrase += authorArray[j] + "%20"
    }
    console.log(completePhrase)
    let fullUrl = "https://twitter.com/intent/tweet?text=" + completePhrase +"Twitter&url=http%3A%2F%2FmyProjectPage.com&via=myProjectPage&hashtags=unHashtagAqui"
    console.log(fullUrl)

    return(
        <a href={fullUrl}><i class="fab fa-twitter-square fa-3x icon-color"></i></a>
    )
}

export default Share;