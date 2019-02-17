var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port: 8000})
let logger=require('./logger')

  wss.on('connection', function (ws) {
    ws.on('message', function (data) {
      console.log("message from client=========",data);
    });
   
    ws.send('welcome to logger system');
  });

logger.log('info','first logger')


