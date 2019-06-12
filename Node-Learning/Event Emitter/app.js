let Emitter =  require('events');

let emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere someone said Hello!');
});

emtr.on('greet', function(){
    console.log('second listener... again hello');
});

console.log('hello');

emtr.emit('greet');
