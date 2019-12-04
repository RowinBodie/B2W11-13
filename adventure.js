var next;
var textPaper;
var stats;
var inv;
var invBack;
var active = false;
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

    next = document.createElement("button");
    next.id = "Next";
    next.innerHTML = "Next";
    document.getElementById("introText").appendChild(next);
    next.onclick = function() {nextOne(textAmount,stageNumber)};

    text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "PIZZA!";
    document.getElementById("introText").appendChild(text);
}
//de stats en inventory aanmaken.
function menuAanmaken(){
    stats = document.createElement("div");
    stats.id = "stats";
    document.body.appendChild(stats);

    inventory = document.createElement("button");
    inventory.id = "iventory";
    inventory.innerHTML = "iventory";
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
    statsContent();
    invContent();
}
function openInv(){
    iventory.style.display = "none";
    textPaper.style.display = "none";
    inv.style.display = "inline-block";
}
function closeInv(){
    iventory.style.display = "inline-block";
    if(active == true){
        textPaper.style.display = "inline-block";
    }
    inv.style.display = "none";
}
function background(optionNumber){
    var options = [
        "url('images/maps/woods.png')"
    ];
    document.body.style.background = options[optionNumber];
}
menuAanmaken();
aanmaken();
background(0);