const express= require('express');//Getting express from node_modules folder.
//express is a function that returns a server which is stored in express variable.
const http= require('http');//for converting express server into http server.
const socketio= require('socket.io');// this gives the object which has server class
//socket.io is an object which sends the sockets to the UI when it receives an io. It gives 3 things server, namespace and socket.
const socketServer= socketio.Server;// saving the server class in socketServer
//this socket class will create my io when it is called.

const PORT= 5500;
const app= express();
//server is stored in app variable.
//If someone wants to access the server, let's say the server is accessible on 9000 port.

// app.use((req, res)=>{
//     console.log("this is middleware");
//     res.send("testing");
// })

//considering the server.
const httpServer= http.createServer(app);
const io= new socketServer(httpServer); //this class requires a server to create an io that is integrated with that server. and we have server in app.But it cant take the express server directly we need to convert it into http server.

//Everytime the browser hits our server the browser will take the events by using method on(). connection is the eventlistener and also takes a callback function which returns a socket.
io.on('connection',(socket)=>{ //on()=> taking events
    console.log(`${socket.id} joined`);
    socket.on("this is a msg event", (data)=>{
        io.emit("this is a msg event", data);
    })
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} left`);
    })
})

app.use(express.static("public"));

httpServer.listen(PORT, (()=>{
    console.log(`App is up and running on http://localhost:${PORT}`);
}));

//http://localhost:3000/ is called the base url which is equal to the empty route(/) and whenever the user req for the base url, the response should be
//hello world.

// app.get('/', (req, res)=>{
//     res.send("hello world");
// })

//everytime we have to reset and restart the server whenever we make any changes to the file. ctrl+c is reset
// and node filename.js is restart.

/**So the alternate for reset and restart everytime we use nodemon which restarts the node application automatically
 * . We have to write nodemon filename.js instead of node filename.js after add nodemon package to the application.
 */
