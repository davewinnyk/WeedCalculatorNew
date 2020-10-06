exports.handler = function(event, context, callback) {
    console.log("it's cool")
    const poundweight = 453.592;
    const quapweight = 113.398;
    const ounceweight = 28.3495;
    const halfweight = 14.17475;
    const quarterweight = 7.087375;
    const eighthweight = 3.5436875;
    const gramweight = 1.0;
    const Weightlist = ['pound','quap','ounce','half', 'quarter', 'eighth', 'gram'];
    console.log("yeah")
    let strain = Strain.input;
    let weight = Weight.input;
    let price = Price.input;
    let gramprice;    
    console.log("still good")
    function determineGramPrice(weight){
        console.log("function good")
        switch (weight) {
            case 'pound':
                  gramprice = price / poundweight;
                  console.log(gramprice)
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
                  console.log(gramprice)
                break;
        } 
console.log("this is the end")
    }
    /*
    function getPrices(Strain):

        
        for (let i = 0; i<8; i += 1)
                price = Strain.gramprice * poundweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'quap':
                price = Strain.gramprice * quapweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'ounce':
                price = Strain.gramprice * ounceweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'half':
                price = Strain.gramprice * halfweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'quarter':
                price = Strain.gramprice * quarterweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'eighth':
                price = Strain.gramprice * eighthweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
            if Weight == 'gram':
                price = Strain.gramprice * gramweight
                Strain.pricelist.append(price)
                print(f'The price per {Weight} is {price}')
*/
    

    callback(null, {
    statusCode: 200,
    body: JSON.parse(gramprice, price, weight, strain)
    });
}





/*

event : where we can retrieve post data, headers
context : information about the context in which the function was called, like certain user information
callback : a function that we call to return a response to the user



STUFF FROM DOCS https://docs.netlify.com/functions/build-with-javascript/#format
{
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name"
    "headers": {Incoming request headers}
    "queryStringParameters": {query string parameters }
    "body": "A JSON string of the request payload."
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}

The context parameter includes information about the context in which the serverless function was called, like certain Identity user information, for example.

The callback works much like the same parameter in an AWS Lambda function. Your handler should use the callback to return either an error (as the first parameter) or a response object, such as:
{
    "isBase64Encoded": true|false,
    "statusCode": httpStatusCode,
    "headers": { "headerName": "headerValue", ... },
    "multiValueHeaders": { "headerName": ["headerValue", "headerValue2", ...], ... },
    "body": "..."
}



*/