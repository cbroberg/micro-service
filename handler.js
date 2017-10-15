'use strict'

const photos = require('./photos')

console.log('Module executing ... ')

module.exports.goserverless = (event, context, callback) => {
	const response = {
		statusCode: 200,
    	body: JSON.stringify({
			  message: 'Go Serverless v1.0! Your function executed successfully!',
			  keys: '10',
			  localphotos: photos(),
			//   input: event,
    }),
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event })
}

/* 

const getLocalPhotos = () => {
	return photos
}

const photos = [
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "http://placehold.it/600/92c952",
		"thumbnailUrl": "http://placehold.it/150/92c952"
	},
	{
		"albumId": 1,
		"id": 2,
		"title": "reprehenderit est deserunt velit ipsam",
		"url": "http://placehold.it/600/771796",
		"thumbnailUrl": "http://placehold.it/150/771796"
	},
	{
		"albumId": 1,
		"id": 3,
		"title": "officia porro iure quia iusto qui ipsa ut modi",
		"url": "http://placehold.it/600/24f355",
		"thumbnailUrl": "http://placehold.it/150/24f355"
	},
	{
		"albumId": 1,
		"id": 4,
		"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
		"url": "http://placehold.it/600/d32776",
		"thumbnailUrl": "http://placehold.it/150/d32776"
	}
]

const getRemoteUsers = async () => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users')

    
}

*/

