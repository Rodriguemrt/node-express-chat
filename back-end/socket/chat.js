const sUser = require('../models/userModel');
const sMessage = require('../models/message');

module.exports = function (io) {

  io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
    io.emit('notification', { type: 'new_user', data: socket.id });

    // Listener sur la déconnexion
    socket.on('disconnect', () => {
      console.log(`user ${socket.id} disconnected`);
      io.emit('notification', { type: 'removed_user', data: socket.id });
    });

    socket.on('chat', (message) => {
      console.log(message)

      const NewMessage = new sMessage({
        userId: socket.id,
        text : message.data,
        timestamp: new Date,
      })

      NewMessage.save().then(()=> {
          console.log( "Message", message.data );
        }).catch((error) => {
            console.log(error)
        })
      })
    });

    
}