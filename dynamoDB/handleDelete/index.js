const dynamoose = require('dynamoose')
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
})

const peopleModel = dynamoose.model('lab-18', schema)

exports.handler = async (event) => {
  const response = { statusCode: null, body: null };
  try {
    const id = event.pathParameters.id;
    console.log('-------', event.pathParameters.id);


    await peopleModel.delete({ id });

    response.statusCode = 200;
    response.body = JSON.stringify({ message: 'Item deleted ' });
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  console.log(response);
  return response;
};