const dynamoose = require('dynamoose')
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
})

const peopleModel = dynamoose.model('lab-18', schema)

exports.handler = async(event) => {
  let parseBody = JSON.parse(event.body);
  const response = {statusCode: null, body: null};
  try {
    let result = await peopleModel.create(parseBody);
    response.statusCode = 200;
    response.body = JSON.stringify(result);
  } catch (e) {
    response.statusCode = 500
    response.body = JSON.stringify(e.message)
  }

  return response;
};