exports.handler = function(event, context, callback) {
    let strain = document.getElementsByName('Strain').value;
    console.log(strain.value)
    callback(null, {
        statusCode: 200,
        body: strain.value
        })
    }
    /*
    else 
    {
        callback(new Error("I don't get that bro!"))
    }
}
*/