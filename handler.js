'use strict'

const photos = require('./photos')
// const users = require('./users')

console.log('Module executing ... ')

module.exports.goserverless = (event, context, callback) => {
	const response = {
		statusCode: 200,
    	body: JSON.stringify({
			  message: 'Go Serverless v1.0! Your function executed successfully!',
			  keys: '10',
			  localphotos: photos(),
			  remoteusers: fetch('https://jsonplaceholder.typicode.com/users'),
			//   input: event,
		}),
		header: ({
			'Content-Type': 'application/json'
    	}),
  }

  callback(null, response)

}

