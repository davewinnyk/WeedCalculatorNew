exports.handler = function(event, context, callback) {
    const { path } = JSON.parse(event.path)
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(path),
        })
    }
    /*
    else 
    {
        callback(new Error("I don't get that bro!"))
    }
    
}
*/