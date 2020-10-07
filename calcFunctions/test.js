exports.handler = async (event, context) => {
    const strain = event.queryStringParameters.Strain || "Random Word";
    const price = event.queryStringParameters.Price || "No Price, Bro?";
    const weight = event.queryStringParameters.Weight|| "No Weight, Bro?";
    const poundweight = 453.592;
    const quapweight = 113.398;
    const ounceweight = 28.3495;
    const halfweight = 14.17475;
    const quarterweight = 7.087375;
    const eighthweight = 3.5436875;
    const gramweight = 1.0;
    const Weightlist = ['pound','quap','ounce','half', 'quarter', 'eighth', 'gram'];
  if (Weightlist.includes(weight) == true){    
    return {
    statusCode: 200,
    body: `Wow ${strain} ${price} ${weight} ${halfweight}`
  };}
  else {
    statusCode: 400,
    body: `Wow ${weight} is not valid. It's gotta be ${Weightlist}`
  }
  };