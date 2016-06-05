module.exports = function(){
    var month = new Date().getMonth()+1;
    var now = new Date().getFullYear().toString()+"-"+month.toString()+"-"+new Date().getDate().toString()+" ";
    if(new Date().getHours()<10){now=now+"0"+new Date().getHours().toString()+":";}
        else{now=now+new Date().getHours().toString()+":";}
    if(new Date().getMinutes()<10){now=now+"0"+new Date().getMinutes().toString()+":";}
        else{now=now+new Date().getMinutes().toString()+":";}
    if(new Date().getSeconds()<10){now=now+"0"+new Date().getSeconds().toString();}
        else{now=now+new Date().getSeconds().toString();}
    return now;
}
