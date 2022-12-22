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
    const updatedValues = JSON.parse(event.body);


  let updatePeople =  await peopleModel.update({ id }, updatedValues);

    response.statusCode = 200;
    response.body = JSON.stringify({ message: 'Item updated', updatePeople });
  }
  catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};