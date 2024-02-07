function playingCards(face, suit){
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = ["S", "H", "D", "C"];
    
    if(!validFaces.includes(face)){
        throw new Error('Invalid Face!');
    }

    if(!validSuits.includes(suit)){
        throw new Error('Invalid Suit!');
    }

    let suitsObj ={
        "S": '\u2660',
        "H": '\u2665',
        "D": '\u2666',
        "C": '\u2663'
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suitsObj[suit]}`
        }
    }


}

playingCards("2", "D")