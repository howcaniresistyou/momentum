const quotes = [
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt"
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger"
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Edison",
    },
    {
        quote: "The only thing worse than starting something and failing ... is not starting something.",
        author: "Seth Godin"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
        author: "Elbert Hubbard"
    },
    {
        quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced. ",
        author: "James Baldwin"
    },
    {
        quote: "Only I can change my life. No one can do it for me. ",
        author: "Carol Burnett"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;