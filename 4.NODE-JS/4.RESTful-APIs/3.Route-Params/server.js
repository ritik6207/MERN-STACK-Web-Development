const http = require('http');
const url = require('url');

//2.Define the handler
const requestHandler = (req, res) => {
    // pass the url
    const passedUrl = url.parse(req.url, true);
    const pathname = passedUrl.pathname;
    // console.log(pathname);

    // split the pathname
    const pathComponent = pathname.split("/").filter(Boolean);
    // console.log(pathComponent);

    if (pathComponent[0] === "products" && pathComponent[1]) {
        // Take the product and send to the user
        // Perform db query
        const productId = pathComponent[1];
        // send to the user
        res.writeHead(200, { "content-Type": "text/plain" });
        res.end(`Product ID ${productId}`);
    } else {
        res.writeHead(200, { "content-Type": "text/plain" });
        res.end(`Not Found`);
    }
}

//3.Create the server
const server = http.createServer(requestHandler);

//4.Start our server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});



// for terminate the code press in cmd "ctrl + c"