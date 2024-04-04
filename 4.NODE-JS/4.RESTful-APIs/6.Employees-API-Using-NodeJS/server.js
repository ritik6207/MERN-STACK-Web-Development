const http = require('http');
// mimic (database)
const employees = [
    { id: 1, name: "Ritik", department: "Web_Dev" },
    { id: 2, name: "john", department: "Soft_Engg" },
    { id: 3, name: "natasha", department: "BPO" },
];

//Define the handler
const requestHandler = (req, res) => {
    const { method, url } = req;
    const parts = url.split("/");
    const id = parts[2];
    // console.log(parts);

    //! Get all employees
    if (method === "GET" && url === "/employees") {
        res.writeHead(200, { "content-Type": "application/json" });
        res.end(JSON.stringify(employees));
    }
    //! Get single employees
    else if (method === "GET" && parts[1] === "employees" && id) {
        const employee = employees.find((emp) => emp.id === parseInt(id));
        if (employee) {
            res.writeHead(200, { "content-Type": "application/json" });
            res.end(JSON.stringify(employee));
        } else {
            res.writeHead(200, { "content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Employee not found" }));
        }
    }

    //! Create new employee
    else if (method === "POST" && url === "/employees") {
        let body = "";
        // Listen to the event of making post requs
        req.on("data", (chunk) => {
            body += chunk;
        })
        // send the response
        req.on("end", () => {
            const newEmployee = JSON.parse(body);
            employees.push(newEmployee);
            res.writeHead(200, { "content-Type": "application/json" });
            res.end(JSON.stringify({
                newEmployee,
                employees,
            }));
        })
    }
}


//Create the server
const server = http.createServer(requestHandler);


//Start our server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});



// for terminate the code press in cmd "ctrl + c"