var makeDiff = function(comp){
    var old = comp[0];
    var nw = comp[1];
    var append = "<tr><td>";
    append += viewthis["time"] + "</tr>";
    append += "<tr><td>song name</td><td class='midtitle' colspan='2'>score</td><td colspan='2' class='midtitle'>TP</td></tr>";
    for(var key in nw["score"]){
        var nsong = nw["score"][key];
        var osong = old["score"][key];
        
        if(nsong[0]["score"]>osong[0]["score"] || nsong[0]["TP"]>osong[0]["TP"]){
            append += "<tr><td rowspan='2'>"+key+" [ESY]"+"</td>"
            if(osong[0]["score"]==1000000){
                
            }

            append += "</tr>"
        }



    }

    return append;
}
