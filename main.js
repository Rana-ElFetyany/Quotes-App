

const quotes = [
    
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "Strive not to be a success, but rather to be of value.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If you can dream it, you can do it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
];

var quoteButton = document.getElementById('quoteButton');
var quoteDisplay = document.getElementById('quoteDisplay');

let currentQuoteIndex = Math.floor(Math.random() * quotes.length);

quoteButton.addEventListener('click', () => {
    let newQuoteIndex = Math.floor(Math.random() * quotes.length);
    while (newQuoteIndex === currentQuoteIndex) {
        newQuoteIndex = Math.floor(Math.random() * quotes.length);
    }

    currentQuoteIndex = newQuoteIndex;

    quoteDisplay.textContent = quotes[currentQuoteIndex];
});
