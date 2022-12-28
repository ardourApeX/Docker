const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('<h1>Visiting Root</h1>');
});

app.listen(8000, () => {
	console.log('Server is running at PORT 8000');
});
