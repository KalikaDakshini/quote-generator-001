const quotes = [];

fetch('quotes.txt')
    .then(response => response.text())
    .then(data => {
        quotes.push(...data.split('\n'));
        displayQuote();
    });

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', displayQuote);