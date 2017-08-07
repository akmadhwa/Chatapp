const express = require('express');
const app = express();
const socket = require('socket.io');
const ejs = require('ejs');

const server = app.listen(process.env.PORT || 3000,
    function(){
        console.log('Listening to port 3000');
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('index');
})

var io = socket(server);

io.on('connection', function(socket){
    console.log('Made a Socket connection ID : ' + socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    })

    socket.on('typing', function(){
        socket.broadcast.emit('typing');
    })

    socket.on('disconnect' , function(){
        console.log(socket.id+" has disconnect")
    })
});



