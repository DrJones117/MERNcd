const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log("listening on port 8000.")
);


const io = require("socket.io")(server, {cors: true});

io.on("connection" , socket => {
    console.log(socket.id);
    socket.on("Welcome", data => {
        socket.broadcast.emit("send_data-to_all_other_clients", data);
    });
});