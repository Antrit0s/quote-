document.addEventListener('DOMContentLoaded', () => {
    quotes = [
        "1-The best way to predict the future is to create it.",
        "2-You miss 100% of the shots you don't take.",
        "3-The only limit to our realization of tomorrow is our doubts of today.",
        "4-The purpose of our lives is to be happy.",
        "5-Life is what happens when you're busy making other plans.",
        "6-It's not what happens to you, but how you react to it that matters. --Epictetus"
    ];

     quoteElement = document.getElementById('quote');
     newQuoteButton = document.getElementById('new-quote');

    function getRandomQuote() {
         randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    newQuoteButton.addEventListener('click', () => {
        const randomQuote = getRandomQuote();
        quoteElement.innerHTML = randomQuote;
    });
});
