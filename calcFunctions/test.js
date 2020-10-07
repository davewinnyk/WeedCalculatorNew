exports.handler = function(event, context, callback) {
    const { path } = JSON
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
    7:12:32 PM: 2020-10-07T00:12:32.573Z	152453e0-3bcf-46b2-9e9a-3a03079395db	ERROR	Invoke Error 	{"errorType":"SyntaxError","errorMessage":"Unexpected token / in JSON at position 0","stack":["SyntaxError: Unexpected token / in JSON at position 0","    at JSON.parse (<anonymous>)","    at Runtime.exports.handler (/var/task/src/test.js:2:27)","    at Runtime.handleOnce (/var/runtime/Runtime.js:66:25)"]}
7:12:32 PM: Duration: 3.91 ms	Memory Usage: 65 MB	Init Duration: 137.11 ms	
}
*/