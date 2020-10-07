exports.handler = function(event, context, callback) {
    const { path } = JSON
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(),
        })
    }
    /*
    else 
    {
        callback(new Error("I don't get that bro!"))
    }
}
*/