/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
{
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source: "Nelson Mandela",
  citation: "https://blog.hubspot.com/sales/famous-quotes",
  year: "2021",

},
// Eye break
{
  quote: "The way to get started is to quit talking and begin doing.",
  source: "Walt Disney",
  citation: "https://blog.hubspot.com/sales/famous-quotes",
  year: "1950",

},
//Eye break
{
  quote: "If life were predictable it would cease to be life, and be without flavor.",
  source: "Eleanor Roosevelt",
  citation: "https://blog.hubspot.com/sales/famous-quotes",
  year: "600 BC"

},
//Eye break

{
  quote: "Life is what happens when you're busy making other plans.",
  source: "John Lennon",
  citation: "https://blog.hubspot.com/sales/famous-quotes",
  year: ""

},
//Eye break
{
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "Oprah Winfrey",
  citation: "https://blog.hubspot.com/sales/famous-quotes",
  year: "2008"

},
];
// Test array functionality
//console.log(quotes[0]);


/***
 * `getRandomQuote` function
***/
let getRandomQuote = () => {
  randomNumber = Math.floor(Math.random() * 5)
  //console.log(randomNumber)
  return quotes[randomNumber];
};
//check random quote indexer 
//getRandomQuote();

/***
 * `printQuote` function
***/
let printQuote = () => {
  let randomQuoteObj = getRandomQuote();
  let htmlString = '';
  htmlString += `<p class="quote"> ${randomQuoteObj.quote} </p>`; 
  if (randomQuoteObj.source) {
    htmlString += `<p class="source"> ${randomQuoteObj.source}`;
  } if (randomQuoteObj.citation) {
    htmlString += `<span class="citation"> ${randomQuoteObj.citation} </span>`;
  } if (randomQuoteObj.year) {
    htmlString += `<span class="year"> ${randomQuoteObj.year} </span>`;
  }
htmlString += `</p>`;
return htmlString;
document.getElementById('quote-box').innerHTML = htmlString; 
};

document.getElementById('quote-box').innerHTML = printQuote();

//console.log(printQuote())
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);