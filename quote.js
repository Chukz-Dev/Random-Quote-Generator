const quotes = [{theQuote: "The only way to do great work is to love what you do.",
name: "— Steve Jobs"},

{theQuote: "You are never too old to set another goal or to dream a new dream.",
  name: "— C.S. Lewis"},

{theQuote:"It always seems impossible until it's done.",
  name: "— Nelson Mandela"},

{theQuote:"Keep your face always toward the sunshine—and shadows will fall behind you.",
  name: "— Walt Whitman"},

{theQuote:"Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
  name: "— J.K. Rowling (via Albus Dumbledore)"},

{theQuote:"Do what you can, with what you have, where you are.",
  name: "— Theodore Roosevelt"},

{theQuote:"Believe you can and you're halfway there.",
  name: "— Theodore Roosevelt"},

{theQuote:"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  name: "— Ralph Waldo Emerson"},

{theQuote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
 name:  "— Winston Churchill"},

{theQuote:"Start where you are. Use what you have. Do what you can.",
   name: "— Arthur Ashe"},

{theQuote:"Don’t wait. The time will never be just right.",
  name:  "— Napoleon Hill"},

{theQuote:"You miss 100% of the shots you don’t take.",
  name:  "— Wayne Gretzky"},

{theQuote:"Act as if what you do makes a difference. It does.",
   name: "— William James"},

{theQuote:"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love…",
  name:  "— Marcus Aurelius"},

{theQuote:"Be yourself; everyone else is already taken.",
   name: "— Oscar Wilde"},

{theQuote:"In the middle of every difficulty lies opportunity.",
  name:  "— Albert Einstein"},

{theQuote:"Try to be a rainbow in someone else’s cloud.",
  name:  "— Maya Angelou"},

{theQuote:"You have within you right now, everything you need to deal with whatever the world can throw at you.",
  name:  "— Brian Tracy"},

{theQuote:"The best way to predict your future is to create it.",
   name: "— Peter Drucker"},

{theQuote:"Your present circumstances don’t determine where you can go; they merely determine where you start.",
   name: "— Nido Qubein"},

{theQuote:"You must do the things you think you cannot do.",
   name: "— Eleanor Roosevelt"},

{theQuote:"Life is 10% what happens to us and 90% how we react to it.",
   name: "— Charles R. Swindoll"},

{theQuote:"If you're going through hell, keep going.",
  name:  "— Winston Churchill"},

{theQuote:"Dream big and dare to fail.",
  name:  "— Norman Vaughan"},

{theQuote:"Limit your ‘always’ and your ‘nevers’.",
  name:  "— Amy Poehler"},

{theQuote:"Out of difficulties grow miracles.",
   name: "— Jean de La Bruyère"},

{theQuote:"Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
   name: "— Rikki Rogers"},

{theQuote:"Light tomorrow with today.",
   name: "— Elizabeth Barrett Browning"},

{theQuote:"The harder the conflict, the greater the triumph.",
   name: "— George Washington"},

{theQuote:"Every day may not be good, but there is something good in every day.",
   name: "— Alice Morse Earle"}
]
//console.log(quotes[2]);
function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);

      const randomQuote = quotes[randomIndex];

      //console.log(randomQuote.theQuote);

      const html = `
          <div class="p-ctn">
                <p class="quote">${randomQuote.theQuote}</p>
                <p id="name">${randomQuote.name}</p>
              </div>
      `;

      document.getElementById("enter").innerHTML = html;

}



/*quotes.forEach((quote) => {
 const html = `
    <div class="p-ctn">
          <p class="quote">${quote.theQuote}</p>
          <p id="name">"${quote.name}"</p>
        </div>
 `;
 
 const 
console.log(html);
});*/