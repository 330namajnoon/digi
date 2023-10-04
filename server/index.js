const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = 4000;
const pdp = path.join(__dirname, "./data");
app.use(express.static(pdp));
const server = http.createServer(app);
server.listen(port,()=> {
	console.log(`server is up on port ${port}!`);
})

