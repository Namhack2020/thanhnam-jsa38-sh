// Trắc nghiệm
// 1. A 
// 2. A 
// 3. C 
// 4. C 
// 5. B 
// 6. B 
// 7. A 
// 8. B 
// 9. C 
// 10. A

let cards = [
    {name: 'apple', img:"picture/apple.jpg"},
    {name: 'blueberries', img:"picture/blueberries.png"},
    {name: 'coconut', img:"picture/coconut.png"},
    {name: 'mango', img:"picture/mango.jpg"}
]
let gameCards = cards.concat(cards)
gameCards.sort(() => 0.5-Math.random())

let board = document.getElementById('game-board')
let chosenCards = []
let score = 0

function displayCards() {
    board.innerHTML = "";
    gameCards.forEach((card, index) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;
        cardElement.dataset.index = index;
        board.appendChild(cardElement);
      });
    }

displayCards();


board.addEventListener('click', e => {
    const clicked = e.target;
    if (!clicked.classList.contains('card') || clicked.style.visibility === 'hidden') return;

    let index = clicked.dataset.index;
    clicked.style.backgroundImage = "url(" + gameCards[index].img + ")";

    if (chosenCards.some(card => card.dataset.index === index)) return;


    chosenCards.push(clicked);

    if (chosenCards.length === 2) {
        setTimeout(() => {
            if (chosenCards[0].dataset.name === chosenCards[1].dataset.name) {
            chosenCards.forEach(card => card.style.visibility = 'hidden');
            score++;
            document.getElementById('score').textContent = `Score: ${score}`;
            } 
            else {
            chosenCards.forEach(card => card.style.backgroundImage = '');
            }
        chosenCards = [];
      }, 1000);
    }
});

