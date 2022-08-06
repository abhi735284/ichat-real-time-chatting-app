// Node server which will handle socket io connections
const io = require('socket.io')(3000) 

const user = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name=>{
        console.log("New user",name);
        user[socket.id]= name;
        socket.broadcast.emit('user-joined',name);

    });
    socket.on('send',message =>{
        socket.broadcast.emit('receive',{message: message,name: users[socket.id] })
    });
    socket.on('disconnect',message =>{
        socket.broadcast.emit('left',user[socket.id] );
        delete user[socket.id];
    });
    
    io.on('connection', function(socket){
        socket.on('bang', function(){
          console.log('bang');
          io.emit('play');
        });
      });
    var sound = new Audio('/public/audio/1.mp3');   

socket.on('play', function () {
    sound.play();   
});  
})