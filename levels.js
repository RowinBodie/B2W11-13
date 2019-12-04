var next;
var aq1;
var aq2;
var aq3;
var clicked = 0;
var character = "none";
var start = document.createElement("button");
start.id = "start";
start.innerHTML = "Start de Game";
document.body.appendChild(start);
start.onclick = function() {intro()};

function intro(){
    background(0);
    aanmaken();
    start.style.display = "none"
    next = document.createElement("button");
    next.id = "Next";
    next.innerHTML = "Next";
    document.getElementById("introText").appendChild(next);
    next.onclick = function() {begin()};

    text = document.createElement("p");
    text.id = "text";
    document.getElementById("introText").appendChild(text);
    begin();
}
function begin(){
    clicked += 1;
    if(clicked == 1){
        text.innerHTML = "Jij: "+"<br>"+"Waar.... waar? waar ben ik?";
    }
    else if(clicked == 2){
        text.innerHTML = "Unkown:"+"<br>"+"Hallo uitverkorenen jij bent gekozen om een wereld te beschermen van een gevaarlijke kracht een kracht die alles verwoest."+"<br>"+"jij zal deze wereld beschermen met een nieuwe gedaamte iets dat bij je past.";
    }
    else if(clicked == 3){
        text.innerHTML = "Unkown:"+"<br>"+"Maar eerst wil ik je een paar vragen stellen zo dat ik kan weten wat voor soort gedaamte je precies verdient.";
    }
    else if(clicked == 4){
        text.innerHTML = "Unkown:"+"<br>"+"Als je een vrouw (die je niet kent) ziet met haar telefoon in haar handen die niet oplettent op een rijdende auto ziet af lopen ga je haar waarschuwen of haar der lesje laten leren??";
        //button1
        aq1 = document.createElement("button");
        aq1.className = "options";
        aq1.id = "up";
        aq1.innerHTML = "Waarschuw haar";
        aq1.onclick = function(){nextq()};
        document.body.appendChild(aq1);
        //button2
        aq2 = document.createElement("button");
        aq2.className = "options";
        aq2.innerHTML = "Lesje laten leren";
        aq2.onclick = function(){nextq()};
        document.body.appendChild(aq2);
        next.style.display = "none";
    }
    else if(clicked == 5){
        text.innerHTML = "Unkown:"+"<br>"+"okay met dit antwoord kan ik wel iets doen. volgende vraag.";
    }
    else if(clicked == 6){
        text.innerHTML = "Unkown:"+"<br>"+"je ziet een man die woedend en dronken is een andere man in elkaar slaan en de man ziet je staan er roept naar je 'ROT OP OF JIJ BENT HIERNA' wat zou jij doen?";
        //button1
        aq1 = document.createElement("button");
        aq1.className = "options";
        aq1.id = "high";
        aq1.innerHTML = "blijf staan";
        aq1.onclick = function(){pick1(),nextqu()};
        document.body.appendChild(aq1);
        //button2
        aq2 = document.createElement("button");
        aq2.className = "options";
        aq2.id = "up";
        aq2.innerHTML = "haal hulp";
        aq2.onclick = function(){pick2(),nextqu()};
        document.body.appendChild(aq2);
        //button3
        aq3 = document.createElement("button");
        aq3.className = "options";
        aq3.innerHTML = "ren weg";
        aq3.onclick = function(){pick3(),nextqu()};
        document.body.appendChild(aq3);
        next.style.display = "none";
    }
    else if(clicked == 7){
        text.innerHTML = "Unkown:"+"<br>"+"okay met dit antwoord weet ik bijna wat je bent. nog maar een vraag.";
    }
    else if(clicked == 8){
        text.innerHTML = "Unkown:"+"<br>"+"je maakt een kast open en je ziet daar een twix en een mars liggen welke pak je!?";
        //button1
        aq1 = document.createElement("button");
        aq1.className = "options";
        aq1.id = "up";
        aq1.innerHTML = "Twix";
        aq1.onclick = function(){nextq()};
        document.body.appendChild(aq1);
        //button2
        aq2 = document.createElement("button");
        aq2.className = "options";
        aq2.innerHTML = "Mars";
        aq2.onclick = function(){nextq()};
        document.body.appendChild(aq2);
        next.style.display = "none";
    }
}
function nextq(){
    next.style.display = "inline-block";
    aq1.parentNode.removeChild(aq1);
    aq2.parentNode.removeChild(aq2);
    begin();
}
function nextqu(){
    next.style.display = "inline-block";
    aq1.parentNode.removeChild(aq1);
    aq2.parentNode.removeChild(aq2);
    aq3.parentNode.removeChild(aq3);
    begin();
}
function pick1(){
    character = "charmander";
}
function pick2(){
    character = "mudkip";
}
function pick3(){
    character = "rowlet";
}
function background(optionNumber){
    var options = [
        "url('images/maps/begin.png')",
        "url('images/maps/woods.png')"
        
    ];
    document.body.style.background = options[optionNumber];
}