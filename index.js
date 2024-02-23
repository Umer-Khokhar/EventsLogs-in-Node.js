const logEvents = require('./logEvents');
// const eventLogs = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myLog = new MyEmitter();

myLog.on('log', (message) => {
    logEvents(message)
})

myLog.emit('log', "File emitted successfully!");
