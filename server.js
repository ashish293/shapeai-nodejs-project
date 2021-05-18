const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
	console.log(__dirname);
});
app.get("/about", (req, res) => {
	res.send("<h1>About</h1>");
});

app.post("/", (req, res) => {
	let n1 = Number(req.body.num1);
	let n2 = Number(req.body.num2);
	let result = String(n1 + n2);
	res.send("Sum of numbers = " + result);
});

app.listen(3000, function () {
	console.log("Server is started on port 3000");
});
