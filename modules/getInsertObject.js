module.exports = function(str){
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

    return obj;
}
