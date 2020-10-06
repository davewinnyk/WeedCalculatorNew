exports.handler = function(event, context, callback) {
    const { weight } = JSON.parse(event.body)

    if (weight == "Ounce")
    {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg: '${weight} is 28grams, bro'}),
        })
    }
    else 
    {
        callback(new Error("I don't get that bro!"))
    }
    
}