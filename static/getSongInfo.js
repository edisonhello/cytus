exports.getSong = function(original){
    switch(original){
        case "adventure":
            return getReturn("R", 5, "Adventure", 4, 8);
        case "aquaticposeidon":
            return getReturn(7, 10, "Aquatic Poseidon", 4, 8);
        case "area184":
            return getReturn(4, 9, "AREA184", 6, 9);
        case "axion":
            return getReturn(8, 8, "AXION", 7, 9);
        case "azucar":
            return getReturn(P, 10, "iAzucar!", 3, 8);
        case "beyond":
            return getReturn(4, 8, "Beyond", 3, 6);
        case "biotonic":
            return getReturn(5, 10, "BIOTONIC", 4, 9);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        case "":
            return getReturn(,,,,);
        default:
            return original;
    }
}
function getReturn(chapter, number, name, easy, hard){
    return {"chapter":chapter, "number":number, "name":name, "easy":easy, "hard":hard}
}
