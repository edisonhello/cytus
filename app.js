var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var mongodb = require('mongodb');
var mongo = mongodb.MongoClient;

var config = require('./config.json');

var plist = require('plist');
var fs = require('fs');

var getInsertObject = require('./modules/getInsertObject.js');
var getTime = require('./modules/getTime.js');

app.use('/cytus/static',express.static(__dirname+'/static'));

app.get('/cytus', function(req, res) {
	res.sendFile(__dirname+'/cytus.html', function() {
		res.end();
	});
});

io.on('connection',function(socket){
    socket.on('xml',function(str,ps){
        var res = plist.parse(str); 
        var obj = getInsertObject(res);
        
        mongo.connect('mongodb://localhost:27017/cytus',function(err,db){
            if(err) throw err;
            var ins = {time:getTime(),score:obj,ps:ps}
            db.collection('cytus').insert(ins);
            socket.emit('insdone');
        })
    })

    socket.on('give all',function(){
        mongo.connect('mongodb://localhost:27017/cytus',function(err,db){
            db.collection('cytus').find({},{_id:0},function(err,res){
                if(err) throw err;
                res.toArray(function(err,res){
                    if(err) throw err;
                    socket.emit('this is all',res);
                })
            })
        })
    })
})


server.listen(2318);
