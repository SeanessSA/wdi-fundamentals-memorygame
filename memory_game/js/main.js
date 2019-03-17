var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.lenght === 2) {
		if(cardsInPlay[0] === cardsInPlay[2]) {
			alert("You found a Match!"); }
			else {
				alert("Sorry, try again!");
		}
	}
}

var flipCard = function (cardId) {
	console.log("User Flipped" + " " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);


