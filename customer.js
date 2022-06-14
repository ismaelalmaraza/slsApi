module.exports.getCustomers = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Esta funcion obtnene clisntes',
          //input: event,
        },
        null,
        2
      ),
    };
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  };


  module.exports.postCustomers = async (event) => {
      var body = JSON.parse(event.body)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Esta funcion obtnene clisntes',
          input: body,
        },
        null,
        2
      ),
    };
  
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  };