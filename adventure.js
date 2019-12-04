//de javascript met alle levels er in.
var script = document.createElement('script'); 
script.src =  "levels.js"; 
document.body.appendChild(script)
//base
var textPaper;
var stats;
//inventory
var inv;
var invBack;
var active = false;
//stats
var statDamage;
var statDefence;
var statHp;
var statLevel;
var att;
var def;
var hp;
var level;
//google fonts
var font = document.createElement('link'); 
font.href = "https://fonts.googleapis.com/css?family=Tomorrow&display=swap"
font.rel = "stylesheet";
document.head.appendChild(font);
//het text balk aanmaken.
function aanmaken(){
    textPaper = document.createElement("div");
    textPaper.className = "text";
    textPaper.id = "introText" ;
    document.body.appendChild(textPaper);
}
//de stats en inventory aanmaken.
function menuAanmaken(){
    stats = document.createElement("div");
    stats.id = "stats";
    document.body.appendChild(stats);

    statLevel = document.createElement("div");
    statLevel.id = "statlevel";
    statLevel.className = "status";
    document.getElementById("stats").appendChild(statLevel);

    statHp = document.createElement("div");
    statHp.id = "statHp";
    statHp.className = "status";
    document.getElementById("stats").appendChild(statHp);

    statDamage = document.createElement("div");
    statDamage.id = "statDamage";
    statDamage.className = "status";
    document.getElementById("stats").appendChild(statDamage);

    statDefence = document.createElement("div");
    statDefence.id = "statDefence";
    statDefence.className = "status";
    document.getElementById("stats").appendChild(statDefence);

    inventory = document.createElement("button");
    inventory.id = "inventory";
    inventory.innerHTML = "inventory";
    inventory.onclick = function(){openInv()};
    document.body.appendChild(inventory);

    inv = document.createElement("div");
    inv.id = "inv";
    inv.style.display = "none";
    document.body.appendChild(inv);

    invBack = document.createElement("button");
    invBack.id = "invBack";
    invBack.innerHTML = "Back";
    invBack.onclick = function(){closeInv()};
    document.getElementById("inv").appendChild(invBack);
    //statsContent();
    // invContent();
}
// function statsContent(){
//     statDamage.innerHTML = "Attack: "+att
//     statDefence.innerHTML = "Defence: "+def
//     statHp.innerHTML = "Hitpoints: "+hp
//     statLevel.innerHTML = "Level: "+lvl
// }
function status(){
    att += addA;
    def += addD;
    hp += addH;
    level += addl
}
function openInv(){
    inventory.style.display = "none";
    textPaper.style.display = "none";
    inv.style.display = "inline-block";
}
function closeInv(){
    inventory.style.display = "inline-block";
    if(active == true){
        textPaper.style.display = "inline-block";
    }
    inv.style.display = "none";
}
//menuAanmaken();
