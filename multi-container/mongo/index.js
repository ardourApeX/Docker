const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DATABASE = 'mongodb://mymongo:27017/testup';

mongoose
	.connect(DATABASE)
	.then(() => {
		console.log('DB is connected!');
	})
	.catch((error) => {
		console.log('Error in DB Connection');
	});

app.get('/', (req, res) => {
	res.status(200).json({ success: true, message: 'You are visiting root' });
});

app.listen(8000, () => {
	console.log('Server is up an running');
});
