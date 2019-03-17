var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.lenght === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	}
	else {
		alert("sorry, try again!");
	}
}

console.log ("User Flipped Queen" + cardOne);
console.log ("User Flipped King" + cardTwo);