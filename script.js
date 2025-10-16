const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Life is what happens when you're busy making other plans."
];

const quoteDisplay = document.getElementById('quote-display');
const quoteStatus = document.getElementById('quote-status');
const quoteCount = document.getElementById('quote-count');
const newQuoteButton = document.getElementById('new-quote');
const seed = '1';

function displayQuote(quote) {
    quoteDisplay.textContent = quote;
    quoteStatus.textContent = 'Quote updated!';
    localStorage.setItem(`quote-generator-${seed}`, quote);
}

function getStoredQuote() {
    return localStorage.getItem(`quote-generator-${seed}`);
}

function updateQuoteCount() {
    quoteCount.textContent = quotes.length;
}

function generateQuote() {
    const storedQuote = getStoredQuote();
    if (storedQuote) {
        displayQuote(storedQuote);
    } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        displayQuote(quotes[randomIndex]);
    }
}

newQuoteButton.addEventListener('click', generateQuote);

updateQuoteCount();
generateQuote();