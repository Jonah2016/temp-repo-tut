const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.end("Welcome to the home page");
	} else if (req.url == "/about") {
		res.end("Hello you are in about page");
	} else {
		res.end(`
    <h1>Oops Sorry!</h1>
    <p>This page cannot be found</p>
    `);
	}
	res.end();
});

server.listen(5000);
