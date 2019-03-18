var cards = [ 
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "image/king-of-hearts.png"
},
{
	rank: "KIng",
	suit: "Diamonds",
	cardImage: "image/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() 
{
	if (cardsInPlay.lenght === 2) {
		if(cardsInPlay[0] === cardsInPlay[2]) { 
			alert("You found a Match!");} else {
				alert("Sorry, try again!");
			}
		}
	}

var flipCard = function (cardId) {
	console.log("User Flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User Flipped" + cards[cardId].cardImage);
	cardsInPlay.push(cardsInPlay[cardId].cardImage);
	console.log("USer Flipped" + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].suit);
	checkForMatch();
};

flipCard(0);
flipCard(2);




