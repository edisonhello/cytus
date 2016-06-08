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
            return getReturn("P" , 10, "iAzucar!", 3, 8);
        case "beyond":
            return getReturn(4, 8, "Beyond", 3, 6);
        case "biotonic":
            return getReturn(5, 10, "BIOTONIC", 4, 9);
        case "blackcase":
            return getReturn(3, 8, "The black Case", 5, 7);
        case "blackhair":
            return getReturn(4, 7, "Black Hair", 6, 9);
        case "bloody_purity":
            return getReturn(6, 6, "Bloody Purity", 8, 9);
        case "blueeyes":
            return getReturn("P", 5, "Blue Eyes", 6, 9);
        case "brionac":
            return getReturn(9, 3, "Brionac ~Lugh Lamhfhata~", 2, 7);
        case "chaoticdrive":
            return getReturn("S" , 7, "CHAOTIC DRIVE", 4, 7);
        case "chapter01":
            return getReturn(1, 0, "Operators", 1, 4);
        case "chapter02":
            return getReturn(2, 0, "Disaster", 2, 6);
        case "chapter03":
            return getReturn(3, 0, "Cytus", 4, 8);
        case "chapter04":
            return getReturn(4, 0, "The Silence (The Quiet Cube Mix)", 3, 7);
        case "chapter05":
            return getReturn(5, 0, "Vanessa", 5, 9);
        case "chapter06":
            return getReturn(6, 0, "The Lost", 4, 7);
        case "chapter07":
            return getReturn(7, 0, "Loom", 2, 7);
        case "chapter08":
            return getReturn(8, 0, "Another Me", 3, 6);
        case "chapter09":
            return getReturn(9, 0, "Buried", 4, 8);
        case "chapter10":
            return getReturn(10, 0, "The New World", 1, 1);
        case "chapter_d01":
            return getReturn("D", 1, "Rainy Memory", 2, 6);
        case "chapter_d02":
            return getReturn("D", 2, "Undo", 4, 7);
        case "chapter_d03":
            return getReturn("D", 3, "Hua Sui Yue", 2, 6);
        case "chapter_d04":
            return getReturn("D", 4, "I race the dawn", 1, 8);
        case "chapter_d05":
            return getReturn("D", 5, "Wings of Piano", 2, 7);
        case "chapter_d06":
            return getReturn("D", 6, "Utopiosphere", 3, 6);
        case "chapter_d07":
            return getReturn("D", 7, "Fable", 3, 8);
        case "chapter_d08":
            return getReturn("D", 8, "Angelic Sphere", 4, 7);
        case "chapter_d09":
            return getReturn("D", 9, "Leviathan", 7, 9);
        case "chapter_d10":
            return getReturn("D", 10, "Magnolia", 7, 9);
        case "chapter_d01":
            return getReturn("D", 1, "Rainy Memory", 2, 6);
        case "chapter_d02":
            return getReturn("D", 2, "Undo", 4, 7);
        case "chapter_d03":
            return getReturn("D", 3, "Hua Sui Yue", 2, 6);
        case "chapter_d04":
            return getReturn("D", 4, "I race the dawn", 1, 8);
        case "chapter_d05":
            return getReturn("D", 5, "Wings of Piano", 2, 7);
        case "chapter_d06":
            return getReturn("D", 6, "Utopiosphere", 3, 6);
        case "chapter_d07":
            return getReturn("D", 7, "Fable", 3, 8);
        case "chapter_d08":
            return getReturn("D", 8, "Angelic Sphere", 4, 7);
        case "chapter_d09":
            return getReturn("D", 9, "Leviathan", 7, 9);
        case "chapter_d10":
            return getReturn("D", 10, "Magnolia", 7, 9);
        default:
            return original;
    }
}
function getReturn(chapter, number, name, easy, hard){
    return {"chapter":chapter, "number":number, "name":name, "easy":easy, "hard":hard}
}
