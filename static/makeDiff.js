var makeDiff = function(comp){
    var old = comp[0];
    var nw = comp[1];
    var append = "<tr><td>";
    append += nw["time"] + "</tr>";
    append += "<tr><td colspan='2' class='midtitle'>song name</td><td class='midtitle' colspan='3'>score</td><td colspan='3' class='midtitle'>TP</td></tr>";
    for(var key in nw["score"]){
        var nsong = nw["score"][key];
        var osong = old["score"][key];
        
        if(nsong[0]["score"]>osong[0]["score"] || nsong[0]["TP"].toFixed(2)>osong[0]["TP"].toFixed(2)){
            if(nsong[0]["TP"]==100){
                append += "<tr><td class='grn'>"+key+"</td><td class='grn'>[ESY]</td>";
            }
            else{
                append += "<tr><td>"+key+"</td><td>[ESY]</td>";
            }

            if(osong[0]["score"]==1000000){
                append += "<td class='grn'>"+osong[0]["score"]+"</td>";
            }
            else{
                append += "<td>"+osong[0]["score"]+"</td>";
            }
            if(nsong[0]["score"]>osong[0]["score"]){
                append += "<td>&gt;&gt;</td>";
            }
            else{
                append += "<td>==</td>"
            }
            if(nsong[0]["score"]==1000000){
                append += "<td class='grn'>"+nsong[0]["score"]+"</td>";
            }
            else{
                append += "<td>"+nsong[0]["score"]+"</td>";
            }
            var osongTP = osong[0]["TP"].toFixed(2).toString();
            var nsongTP = nsong[0]["TP"].toFixed(2).toString();

            if(osong[0]["TP"]==100){
                append += "<td class='grn'>"+osongTP+"</td><td>&gt;&gt;</td>";
            }
            else{
                append += "<td>"+osongTP+"</td><td>&gt;&gt;</td>";
            }
            if(nsong[0]["TP"]==100){
                append += "<td class='grn'>"+nsongTP+"</td>";
            }
            else{
                append += "<td>"+nsongTP+"</td>";
            }
            append += "</tr>"
        }
        if(nsong[1]["score"]>osong[1]["score"] || nsong[1]["TP"].toFixed(2)>osong[1]["TP"].toFixed(2)){
            if(nsong[1]["TP"]==100){
                append += "<tr><td class='grn'>"+key+"</td><td class='grn'>[HRD]</td>";
            }
            else{
                append += "<tr><td>"+key+"</td><td>[HRD]</td>";
            }

            if(osong[1]["score"]==1000000){
                append += "<td class='grn'>"+osong[1]["score"]+"</td>";
            }
            else{
                append += "<td>"+osong[1]["score"]+"</td>";
            }
            if(nsong[1]["score"]>osong[1]["score"]){
                append += "<td>&gt;&gt;</td>"
            }
            else{
                append += "<td>==</td>"
            }
            if(nsong[1]["score"]==1000000){
                append += "<td class='grn'>"+nsong[1]["score"]+"</td>";
            }
            else{
                append += "<td>"+nsong[1]["score"]+"</td>";
            }
            var osongTP = osong[1]["TP"].toFixed(2).toString();
            var nsongTP = nsong[1]["TP"].toFixed(2).toString();

            if(osong[1]["TP"]==100){
                append += "<td class='grn'>"+osongTP+"</td><td>&gt;&gt;</td>";
            }
            else{
                append += "<td>"+osongTP+"</td><td>&gt;&gt;</td>";
            }
            if(nsong[1]["TP"]==100){
                append += "<td class='grn'>"+nsongTP+"</td>";
            }
            else{
                append += "<td>"+nsongTP+"</td>";
            }
            append += "</tr>"
        }
    }

    return append;
}
