const http = require('http');

const port = 5050;

const server = http.createServer((req,res) => {
    console.log(res);
    res.end('<html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>');

});
server.listen(port, () => {
    console.log("holallalalalal");
});

