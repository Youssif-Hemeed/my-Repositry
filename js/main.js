
var quotes=[

{
caption:` “Be yourself; everyone else is already taken.”   `,
writer:`― Oscar Wilde`
},
{
        caption:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
        `,
        writer:`― Marilyn Monroe `,        
},

 {
 caption:` “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”  `,
writer:`― Albert Einstein `
},
 {
caption:` “So many books, so little time.”  `,
writer:`― Frank Zappa `
},
        

{
caption:` “A room without books is like a body without a soul.” `,
 writer:`―― Marcus Tullius Cicero `
},
                
{
 caption:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” `,
 writer:`― Bernard M. Baruch `,
 },

{
 caption:` “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” `,
 writer:`― Dr. Seuss  `,
 },

 {
 caption:` “You only live once, but if you do it right, once is enough.” `,
 writer:`― Mae West   `,
 },
{
 caption:`“It is better to be hated for what you are than to be loved for what you are not.”`,
 writer:`― Andre Gide, Autumn Leaves   `,
 },



 {
    caption:`“Be the change that you wish to see in the world.” `,
    writer:`― Mahatma Gandhi `,
    },


 {
        caption:`“In three words I can sum up everything I've learned about life: it goes on.” `,
        writer:` ― Robert Frost `,
},
    

 {
            caption:`“ To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” `,
            writer:`― Ralph Waldo Emerson`,
  },

 {
                caption:`“To live is the rarest thing in the world. Most people exist, that is all.” `,
                writer:`― Oscar Wilde `,
  },

  {
      caption:`“Insanity is doing the same thing, over and over again, but expecting different results.”`,
     writer:`― Narcotics Anonymous  `,
     },
    
  {
 caption:`“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
writer:`― Oscar Wilde, The Happy Prince and Other Stories   `,
},


{
 caption:`“It is better to be hated for what you are than to be loved for what you are not.” `,
 writer:` ― Andre Gide, Autumn Leaves   `,
},

{
 caption:`“I may not have gone where I intended to go, but I think I have ended up where I needed to be.” `,
 writer:`  ― douglas adams, The Long Dark Tea-Time of the Soul   `,
},
{
caption:`“Life is what happens to us while we are making other plans.”`,
writer:` _ Allen Saunders   `,
},

{
 caption:`“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,
 writer:` ― Mark Twain   `,
},

]


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getQuote() {

    let previousNumber = null;
    let randomNumber = null;
    
    do {
        randomNumber =  getRndInteger(0, quotes.length-1); 
    } while (randomNumber === previousNumber);
    
    previousNumber = randomNumber;
    
        document.getElementById('demo').innerHTML = quotes[randomNumber].caption
        document.getElementById('demo2').innerHTML = quotes[randomNumber].writer
console.log(randomNumber)

}

