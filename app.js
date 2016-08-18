var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var mongodb = require('mongodb');
var mongo = mongodb.MongoClient;

var config = require('./config.json');
// var getSongInfo = require('./modules/getSongInfo');

// console.log(getSongInfo("adventure"));


var plist = require('plist');
var fs = require('fs');

// <<<<<<< HEAD
var getInsertObject = require('./modules/getInsertObject.js');
var getTime = require('./modules/getTime.js');

app.use('/cytus/static',express.static(__dirname+'/static'));
// =======
// app.use('/static',express.static(__dirname+'/static'));
// >>>>>>> songname

app.get('/cytus', function(req, res) {
	res.sendFile(__dirname+'/cytus.html', function() {
		res.end();
	});
});
app.get('/sdvx', function(req, res) {
	res.sendFile(__dirname+'/cytus.html', function() {
		res.end();
	});
});

io.on('connection',function(socket){
    socket.on('cytus_xml',function(str,ps){
        var res = plist.parse(str); 
        var obj = getInsertObject(res);
        
        mongo.connect('mongodb://localhost:27017/cytus',function(err,db){
            if(err) throw err;
            var ins = {time:getTime(),score:obj,ps:ps}
            db.collection('cytus').insert(ins);
            socket.emit('cytus_insdone');
        })
    })

    socket.on('cytus_give all',function(){
        mongo.connect('mongodb://localhost:27017/cytus',function(err,db){
            db.collection('cytus').find({},{_id:0},function(err,res){
                if(err) throw err;
                res.toArray(function(err,res){
                    if(err) throw err;
                    socket.emit('cytus_this is all',res);
                })
            })
        })
    })

    socket.on('cytus_chk pass',function(pass){
        if(pass == config.cytus_pass){
            socket.emit('cytus_corr');
        }
        else{
            socket.emit('cytus_incor');
        }
    })
})


server.listen(2318);
