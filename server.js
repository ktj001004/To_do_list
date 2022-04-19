const express = require("express");
const main = express();

main.listen(3000, ()=>{
	console.log("server has been started");
});


main.get("/", (req, res) => {
	main.use(express.static("public"));
	res.sendFile(__dirname + "/index.html");
});

main.get("/login", (req, res) => {
	main.use(express.static("public"));
	res.sendFile(__dirname + "/login.html");
});

main.get("/zizon", (req,res) => {
	res.sendFile(__dirname + "/esteregg.html");
});