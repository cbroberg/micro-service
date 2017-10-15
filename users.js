'use strict'
require('isomorphic-fetch')

let usersGlobal = []

const saveUsers = (users) => {
	console.log(users)
	usersGlobal = users.concat()
	// usersGlobal = users
}

const getRemoteUsers = () => {
	const response = fetch('https://jsonplaceholder.typicode.com/users', {
		headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
		}
	}).then((response) => {
		if (response.status !== 200) {
			console.log(`Error fetching users: ${response.status}`)
		} else {
			response.json().then(users => saveUsers(users))
		}
	})
	.catch((error) => console.log(`Error fetching users: ${error}`))

	return usersGlobal

    
}

console.log(usersGlobal)


module.exports = getRemoteUsers

/*

fetch('/users.json', {
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
	.then((response) => {
		if (response.status !== 200) {
			console.log(`Error fetching users: ${response.status}`)
		} else {
			response.json().then(users => this.setState({ users }))
			// console.log(response.status)
		}
	})
	.catch((error) => console.log(`Error fetching users: ${error}`))

*/

