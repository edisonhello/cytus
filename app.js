var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var mongodb = require('mongodb');
var mongo = mongodb.MongoClient;

var config = require('./config.json');
var getSongInfo = require('./static/getSongInfo');

console.log(getSongInfo.getSong("adventure"));


var plist = require('plist');
var fs = require('fs');

app.use('/static',express.static(__dirname+'/static'));

app.get('/cytus', function(req, res) {
	res.sendFile(__dirname+'/cytus.html', function() {
		res.end();
	});
});

var when;
setInterval(function() {
    var month = new Date().getMonth()+1;
    var now = new Date().getFullYear().toString()+"-"+month.toString()+"-"+new Date().getDate().toString()+" ";
    if(new Date().getHours()<10){var nnow=now+"0"+new Date().getHours().toString()+":";}
        else{var nnow=now+new Date().getHours().toString()+":";}
    if(new Date().getMinutes()<10){var nnnow=nnow+"0"+new Date().getMinutes().toString()+":";}
        else{var nnnow=nnow+new Date().getMinutes().toString()+":";}
    if(new Date().getSeconds()<10){var nnnnow=nnnow+"0"+new Date().getSeconds().toString();}
        else{var nnnnow=nnnow+new Date().getSeconds().toString();}
    when = nnnnow;
}, 1000);

io.on('connection',function(socket){
    socket.on('xml',function(str,ps){
        var res = plist.parse(str);
        
        var obj = {};

        for(var key in res){
            var where = key.indexOf('EasyBestEval');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song] = [{},{}];
            }
            where = key.indexOf('EasyBestTP');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][0]["TP"] = res[key];
            }
            where = key.indexOf('EasyHighScore');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][0]["score"] = res[key];
            }
            where = key.indexOf('EasyPlayedTimes');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][0]["played"] = res[key];
            }
            where = key.indexOf('HardBestTP');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][1]["TP"] = res[key];
            }
            where = key.indexOf('HardHighScore');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][1]["score"] = res[key];
            }
            where = key.indexOf('HardPlayedTimes');
            if(where>=0){
                var song = key.substring(0,where);
                obj[song][1]["played"] = res[key];
            }
        }

        
        mongo.connect('mongodb://localhost:27017/cytus',function(err,db){
            if(err) throw err;
            var ins = {time:when,score:obj,ps:ps}
            db.collection('cytus').insert(ins);
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
