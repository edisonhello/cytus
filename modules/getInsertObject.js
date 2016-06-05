module.exports = function(str){
    var obj = {};
    for(var key in str){
        var where = key.indexOf('EasyBestEval');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song] = [{},{}];
        }
        where = key.indexOf('EasyBestTP');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][0]["TP"] = str[key];
        }
        where = key.indexOf('EasyHighScore');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][0]["score"] = str[key];
        }
        where = key.indexOf('EasyPlayedTimes');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][0]["played"] = str[key];
        }
        where = key.indexOf('HardBestTP');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][1]["TP"] = str[key];
        }
        where = key.indexOf('HardHighScore');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][1]["score"] = str[key];
        }
        where = key.indexOf('HardPlayedTimes');
        if(where>=0){
            var song = key.substring(0,where);
            obj[song][1]["played"] = str[key];
        }
    }

    return obj;
}
