exports.handler = async (event, context) => {
    //add input from website to variables 
    const strain = event.queryStringParameters.Strain || "Random Strain";
    const price = event.queryStringParameters.Price || "No Price, Bro?";
    const weight = event.queryStringParameters.Weight|| "No Weight, Bro?";
    //add standard weights as variables 
    const poundweight = 453.592;
    const quapweight = 113.398;
    const ounceweight = 28.3495;
    const halfweight = 14.17475;
    const quarterweight = 7.087375;
    const eighthweight = 3.5436875;
    const gramweight = 1.0;
    //for weight validation of necessary - const Weightlist = ['pound','quap','ounce','half', 'quarter', 'eighth', 'gram'];

    //sets gramprice to 0
    let gramprice = 0; 

    //calculates gramprice based on valid weight and price 
    switch (weight) {
        case 'pound':
              gramprice = price / poundweight;
            break;
            case 'quap':
                gramprice = price / quapweight;
                console.log(gramprice)
              break;
          case 'ounce':
                gramprice = price / ounceweight;
                console.log(gramprice)
              break;
          case 'half':
                gramprice = price / halfweight;
                console.log(gramprice)
              break;
          case 'quarter':
                gramprice = price / quarterweight;
                console.log(gramprice)
              break;
          case 'eighth':
                gramprice = price / eighthweight;
                console.log(gramprice)
              break;               
          case 'gram':
                gramprice = price / gramweight;
                console.log(gramprice)
              break;
        default:
                gramprice = 0;
            break;    
    }
//FAILURE
if (gramprice <= 0)
{
    return {
        statusCode: 400,
        body: `Something's wrong here, bro! Check yourself.`
      };
}
 //SUCCESS 
 else
 {
     //Get Prices
     let eighthprice = gramprice*eighthweight;
     let quarterprice = gramprice*quarterweight;
     let halfprice = gramprice*halfweight;
     let ounceprice = gramprice*ounceweight;
     let quapprice = gramprice*quapweight;
     let poundprice = gramprice*poundweight;
     //Get Phrases
    let strainphrase =`${strain}`;
    let poundphrase = `It's ${poundprice} per pound`;
    let quapphrase = `It's ${quapprice} per quap`;
    let ouncephrase = `It's ${ounceprice} per ounce`;
    let halfphrase = `It's ${halfprice} per half`;
    let quarterphrase = `It's ${quarterprice} per quarter`;
    let eighthphrase = `It's ${eighthprice} per eighth`;
    let gramphrase = `It's ${gramprice} per gram`;

     return {
         statusCode: 200,
         body: `<!DOCTYPE html>
         <html lang=\"en\">
         <head>
             <meta charset=\"UTF-8\">
             <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
             <link rel=\"stylesheet\" href=\"https://kind-wescoff-3b20b6.netlify.app/style.css\">
             <link href=\"https://fonts.googleapis.com/css2?family=Pacifico&family=Sansita+Swashed:wght@300;400;500;900&display=swap\" rel=\"stylesheet\">
             
             <title>Weed Calculator - Marijuana Bud Price by Weights</title>
             </head>
             <body>
             <header class=\"header\">
             <a href=\"https://kind-wescoff-3b20b6.netlify.app/index.html\">
                 <h1>Mellow's Marijuana Measurement</h1>
             </a>
                 <br>
                 <h3 class=\"subtext\">Get the Price Breakdown by Common Weights of Weed</h3>
             </header>
             <form action=\"https://kind-wescoff-3b20b6.netlify.app/.netlify/functions/test\" class=\"input-form\">
                 <label>Strain Name:<input type=\"text\" name=\"Strain\" class=\"strain\"></label>
                 <label>Price: $<input type=\"number\" name=\"Price\" class=\"price\"></label>
                 <label>Weight:<select name=\"Weight\" class=\"weight\">
                 <option value=\"pound\">Pound</option>
                 <option value=\"quap\">Quap</option>
                 <option value=\"ounce\">Ounce</option>
                 <option value=\"half\">Half Ounce</option>
                 <option value=\"quarter\">Quarter</option>
                 <option value=\"eighth\">Eighth</option>
                 <option value=\"gram\">Gram</option>
                 </select>
             </select></label>
                 <button class=\"button\" type=\"submit\" id=\"function\">Run Function</button>
             </form>
             </a>
             <br>
             <h1>${strainphrase}</h1>
             <br>
             <h3>${poundphrase} <br> ${quapphrase} <br> ${ouncephrase} <br>${halfphrase}<br> ${quapphrase}<br> ${quarterphrase}<br> ${eighthphrase}<br> ${gramphrase}</h3><br>
         </body>
         </html>`
         
         //body: `${poundphrase} ${quapphrase} ${ouncephrase} ${halfphrase} ${quapphrase} ${quarterphrase} ${eighthphrase} ${gramphrase}`
       };
 }
  };