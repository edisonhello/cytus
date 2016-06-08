var makeallAppend = function(viewthis){
    var append = "<tr><td>";
    append += viewthis["time"] + "</tr>";
    append += "<tr><td>song name</td><td class='midtitle'>score</td><td class='midtitle'>TP</td><td>times</td></tr>";
    for(var key in viewthis["score"]){
        var song = viewthis["score"][key];
        append += "<tr";
        if(song[0]["TP"]==100 && song[1]["TP"]==100){
            append += " class='TPh'"
        }
        append += ">"

        append += "<td rowspan='2'";
        if(song[0]["score"]!=1000000 || song[1]["score"]!=1000000){
            append += " class='ptsuM'";
        }
        append += ">"+key+"</td>";
        var fixTP = [],strTP = [],lenTP = [];
        fixTP[0] = song[0]["TP"].toFixed(2);
        fixTP[1] = song[1]["TP"].toFixed(2);
        strTP[0] = fixTP[0].toString();
        strTP[1] = fixTP[1].toString();
        if(song[0]["score"]!=1000000){
            append += "<td class='score ptsuM'>"+song[0]["score"]+"</td>";
            append += "<td class='TP ptsuM'>"+fixTP[0]+"</td>";
            append += "<td class='played ptsuM'>"+song[0]["played"]+"</td>";
        }
        else if(song[0]["TP"]!=100){
            append += "<td class='score'>"+song[0]["score"]+"</td>";
            append += "<td class='TP'>"+fixTP[0]+"</td>";
            append += "<td class='played'>"+song[0]["played"]+"</td>";
        }
        else{
            append += "<td class='score TPh'>"+song[0]["score"]+"</td>";
            append += "<td class='TP TPh'>"+fixTP[0]+"</td>";
            append += "<td class='played TPh'>"+song[0]["played"]+"</td>";
        }

        if(song[1]["score"]!=1000000){
            append += "</tr><tr class='ptsuM'>";
        }
        else if(song[1]["TP"]==100){
            append += "</tr><tr class='TPh'>";
        }
        else{
            append += "</tr><tr>";
        }
        append += "<td class='score'>"+song[1]["score"]+"</td>";
        append += "<td class='TP'>"+fixTP[1]+"</td>";
        append += "<td class='played'>"+song[1]["played"]+"</td>";
        append += "</tr>";
    }

    return append;
}
