exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: "Hello, World"
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