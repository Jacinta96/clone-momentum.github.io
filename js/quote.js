const quotes = [
    {
        quote: "Life is something that happens when you can't get to sleep.",
        author: "Fran Lebowitz",
    },
    {
        quote: "We did not change as we grew older; we just became more clearly ourselves.",
        author: "Lynn Hall",
    },
    {
        quote: "The first step to getting the things you want out of life is this: Decide what you want.",
        author: "Ben Stein",
    },
    {
        quote: "It is possible to fail in many ways...while to succeed is possible only in one way.",
        author: "Aristotle",
    },
    {
        quote: "Nothing succeeds like the appearance of success.",
        author: "Christopher Lasch",
    },
    {
        quote: "Pride breakfasted with plenty, dined with poverty, and supped with infamy.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "Thanks, Nan2.",
        author: "Owl",
    },
    {
        quote: "Rave moom",
        author: "Owl",
    },
    {
        quote: "Havava",
        author: "Owl",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;