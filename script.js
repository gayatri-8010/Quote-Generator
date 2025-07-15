const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Push yourself, because no one else is going to do it for you.",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "If you can dream it, you can do it. – Walt Disney",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
