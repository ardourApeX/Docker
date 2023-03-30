const mongoose = require('mongoose');

const DATABASE = 'mongodb://localhost:27017/testup';

mongoose
	.connect(DATABASE)
	.then(() => {
		console.log('DB is connected!');
	})
	.catch((error) => {
		console.log('Error in DB Connection');
	});
