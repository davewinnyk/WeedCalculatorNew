exports.handler = async (event, context) => {
    //add input from website to variables 
    const strain = event.queryStringParameters.Strain || "Random Word";
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

    //calculates gramprice based on weight and price 
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





 //SUCCESS 
    return {
    statusCode: 200,
    body: `Damn, your ${strain} is ${price} per ${weight} and ${gramprice} per gram, bro!`
  };
  };