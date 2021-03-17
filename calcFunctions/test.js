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
        body: `Something's wrong here, bro! Check yourself. o_O`
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
     let halfpoundprice = poundprice/2;
     //Get Phrases
    let strainphrase =`${strain}`;
    let poundphrase = `$${poundprice} per Pound`;
    let halfpoundphrase = `$${halfpoundprice} per Half Pound`;
    let quapphrase = `$${quapprice} per Quap`;
    let ouncephrase = `$${ounceprice} per Ounce`;
    let halfphrase = `$${halfprice} per Half Ounce`;
    let quarterphrase = `$${quarterprice} per Quarter`;
    let eighthphrase = `$${eighthprice} per Eighth`;
    let gramphrase = `$${gramprice} per Gram`;
    
    let pricephrase = `That's some standard priced bud, bro -___-`;

    if (gramprice <= 9) {pricephrase = `That's some cheap bud, bro ^_^ `};
    if (gramprice >= 12) {pricephrase = `That's some pricey bud, bro >_< `};

     return {
         statusCode: 200,
         body: `
         <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="description" content="">
           <!--<link rel="stylesheet" href="./style.css">-->
           <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
           <link rel="preconnect" href="https://fonts.gstatic.com">
       <link href="https://fonts.googleapis.com/css2?family=Ubuntu" rel="stylesheet">
           <link rel="icon" 
           type="image/png" 
           href="./WeedCalculatorLogo.PNG">
           <title>Weed Calculator - Marijuana Bud Price by Weights</title>
           <style>
               body, h1, h2, h3, h4, h5, h6 {font-family: "Ubuntu"}
           </style>
       </head>
       <header class="header">
           <div class="w3-container w3-center w3-theme-l4">
       <a href="./index.html">
           <h1><b>Weed Calculator</b></h1>
       </a>
           <h3 class="subtext">Get the Price Breakdown by Common Weights of Weed</h3>
       </div>
       </header>
       <body>
           <div class="w3-container w3-center w3-padding-large w3-green">
           <form action="./.netlify/functions/calc" class="input-form">
               <!--Navigation Bar-->
               <div class="w3-bar w3-section w3-theme">
                   <a href="/index.html" class="w3-bar-item w3-button w3-green">Home</a>
                   <a href="/TOKE.html" class="w3-bar-item w3-button">TOKE Tokens</a>
       
                 </div>
                 <!--Begin Body--></form>
                 <div class="w3-panel w3-theme">
               <h3><label><b>Strain Name: </b> </h3> <p><input type="text" name="Strain" class="strain" autocomplete="off"></label></p>
               <h3><label><b>Price: $ </b> </h3> <p><input type="number" name="Price" class="price" autocomplete="off"></label></p>
               <!--<input type="text" name="Weight" class="weight">-->
              <h3> <label><b>Weight: </b> </h3> <p><select name="Weight" class="weight"></p>
                   <option value="pound">Pound</option>
                   <option value="quap">Quap</option>
                   <option value="ounce">Ounce</option>
                   <option value="half">Half Ounce</option>
                   <option value="quarter">Quarter</option>
                   <option value="eighth">Eighth</option>
                   <option value="gram">Gram</option>
                   </select>
               </select></label>
               <p><button class="button" type="submit" id="function">Get the Price Breakdown</button></p>
           </form>
           </a>
       </div>
             <br>
             <div class=\"results\">
             <h1>${strainphrase}</h1>
             <br>
             <h3>${poundphrase} <br> ${halfpoundphrase} <br> ${quapphrase} <br> ${ouncephrase} <br>${halfphrase}<br> ${quapphrase}<br> ${quarterphrase}<br> ${eighthphrase}<br> ${gramphrase}</h3><br>
             <br>
             <h2> ${pricephrase} </h2>
         </div>
             </body>
         </html>`
         
         //body: `${poundphrase} ${quapphrase} ${ouncephrase} ${halfphrase} ${quapphrase} ${quarterphrase} ${eighthphrase} ${gramphrase}`
       };
 }
  };





