var cards = [ 
{
	rank: 'Queen',
	suit: 'Hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'Queen',
	suit: 'Diamonds',
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: 'King',
	suit: 'Hearts',
	cardImage: "image/king-of-hearts.png"
},
{
	rank: 'King',
	suit: 'Diamonds',
	cardImage: "image/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.lenght === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) { 
			alert("You found a Match!");
		} else {
				alert("Sorry, try again!");
			}
		}
	};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User Flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};

var createBoard = function() {
	for (var i = 0; i < cards.lenght; i++) {
		var cardElement = document.creatElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

