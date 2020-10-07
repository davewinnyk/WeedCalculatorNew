exports.handler = async (event, context) => {
    const name = event.queryStringParameters.Strain || "World";
  
    return {
      statusCode: 200,
      body: `Hello, ${name}`
    };
  };