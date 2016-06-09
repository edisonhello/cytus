module.exports = function(original){
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
        case "chapter_k01":
            return getReturn("K", 1, "The Way We Were", 3, 6);
        case "chapter_k02":
            return getReturn("K", 2, "The Sanctuary", 4, 8);
        case "chapter_k03":
            return getReturn("K", 3, "The Red Coronation", 5, 9);
        case "chapter_k04":
            return getReturn("K", 4, "Forbidden Codex", 2, 7);
        case "chapter_k05":
            return getReturn("K", 5, "Knight of Firmament", 2, 7);
        case "chapter_k06":
            return getReturn("K", 6, "Lord of Crimson Rose", 2, 8);
        case "chapter_k07":
            return getReturn("K", 7, "Predawn", 3, 7);
        case "chapter_k08":
            return getReturn("K", 8, "The Fallen Bloom", 4, 7);
        case "chapter_k09":
            return getReturn("K", 9, "Where You Are Not", 4, 8);
        case "chapter_k10":
            return getReturn("D", 10, "Music. The enternity of us", 2, 7);
        case "chapter_l01":
            return getReturn("L", 1, "L1 : THE DEVASTATED", 3, 6);
        case "chapter_l02":
            return getReturn("L", 2, "L2 : ASCENSION TO THE UPPER", 4, 8);
        case "chapter_l03":
            return getReturn("L", 3, "The Red Coronation", 5, 9);
        case "chapter_l04":
            return getReturn("L", 4, "Forbidden Codex", 2, 7);
        case "chapter_l05":
            return getReturn("L", 5, "Lnight of Firmament", 2, 7);
        case "chapter_l06":
            return getReturn("L", 6, "Lord of Crimson Rose", 2, 8);
        case "chapter_l07":
            return getReturn("L", 7, "Predawn", 3, 7);
        case "chapter_l08":
            return getReturn("L", 8, "The Fallen Bloom", 4, 7);
        case "chapter_l09":
            return getReturn("L", 9, "Where You Are Not", 4, 8);
        case "chapter_l10":
            return getReturn("L", 10, "Music. The enternity of us", 2, 7);
        case "chapter_l01_d":
            return getReturn("L", 1, "L1 : THE DEVASTATED", 3, 6);
        case "chapter_l02_d":
            return getReturn("L", 2, "L2 : ASCENSION TO THE UPPER", 4, 8);
        case "chapter_l03_d":
            return getReturn("L", 3, "The Red Coronation", 5, 9);
        case "chapter_l04_d":
            return getReturn("L", 4, "Forbidden Codex", 2, 7);
        case "chapter_l05_d":
            return getReturn("L", 5, "Lnight of Firmament", 2, 7);
        case "chapter_l06_d":
            return getReturn("L", 6, "Lord of Crimson Rose", 2, 8);
        case "chapter_l07_d":
            return getReturn("L", 7, "Predawn", 3, 7);
        case "chapter_l08_d":
            return getReturn("L", 8, "The Fallen Bloom", 4, 7);
        case "chapter_l09_d":
            return getReturn("L", 9, "Where You Are Not", 4, 8);
        case "chapter_l10_d":
            return getReturn("L", 10, "Music. The enternity of us", 2, 7);
        default:
            return original;
    }
}
function getReturn(chapter, number, name, easy, hard){
    return {"chapter":chapter, "number":number, "name":name, "easy":easy, "hard":hard}
}
