const isStraight = (cards) => {
    const size = cards.length;
    if( size < 5 || size > 7) return false;
    if(cards.includes(14)) cards.unshift(1);
    const orderedCards = orderCards(cards);
    let cardSize = 5
    let initialIndex = 0;
    for(let index=initialIndex; index < cardSize - 1; index++){
        if(substracCards(orderedCards[index], orderedCards[[index+1]]) != 1 ){
            if(cardSize === cards.length){
                return false;
            }else{
                initialIndex++;
                index=initialIndex++;
                cardSize++;
            }
        }
    }
    return true;
}

const orderCards = (cards) => {
    return cards.sort((a,b) => {
        if(a < b) return -1
        if(a > b) return 1
        return 0;
    })
}

const substracCards = (cardOne, cardTwo) => {
    return cardTwo-cardOne;
}


module.exports = isStraight;