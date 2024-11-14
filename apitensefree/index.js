import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

const PORT = 8000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send("The Server is Running on PORT-8000");
})

io.on("connection",(socket)=> {
   
    socket.emit("me",socket.id);
    console.log("Testing Purposes");
    socket.on("disconnect", () =>
    {
        socket.broadcast.emit("Call Has Been Ended");
    })

    socket.on("calluser", (userToCall,signalData,from,name) =>
    {
        io.to(userToCall).emit("calluser",{signal : signalData,from,name});
    })

    socket.on("answercall",(data) => 
    {
        io.to(data.to).emit("callaccpeted",data.signal);
    }
    )
})

server.listen(PORT,()=>{
    console.log(`Server is Running on the Port ${PORT}`);
})

