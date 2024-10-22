const jessmsg = document.getElementById("jess")
const regularcasmsg = document.getElementById("regularcas")
const ekmsg = document.getElementById("ek")
const boycasmsg = document.getElementById("boycas")
const tristanmsg = document.getElementById("tristan")

let shownjess = false;
let shownregularcas = false;
let shownek = false;
let shownboycas = false;
let showntristan = false;

const msgwindow = document.getElementById("msgwindow")
const msgbox = document.getElementById("msg")

const jesstext = "Happy birthday bro|hope you're doing well in Singapore and get hoes already. Heard Singaporeans are fine||-jess"
const regularcastext = "In a couple of years, with all the hard physical and mental work you've been putting into your life, you'll be able to achieve whatever you want. Strength like yours isn't unnoticeable and your sister knows that too.| I know it's not a lot and you know this already but people care about you. Your family, your friends, everyone you love.|I wish for everything but the best for you.|With whatever choice and decision you make for your life, you'll do great.|Happy birthday, Richard.||-cas"
const ektext = "Happy 23rd birthday ako gyi yae🥳🥳|Tq for always replying to my weird yet strange question everytime💀💀|Though I kinda feel bad always asking u and bothering u😭|But I'm glad you always take your time to answer my dumb questions and always giving me advices|U really are one of the ako gyi's I could really rely on and I'm glad that I have met u|Hope u da best in SG ako gyi yae🥳🥳🥳|birthday boy gyi😈😈👹🎂🎂||-ek"
const boycastext = "Hey man, happy birthday. It's been a while and I hope you are doing great, all the best in your future - Ako Cas"
const tristantext = "Hey, sorry this website is so bad. I hope it renders correctly on your device. Web design really isn't my thing, but I tried.|Tell jess she owes me $2.90 USD at an interest rate of 8%, compounding annually.|I hope you have a great 23rd birthday, and I hope school and everything is going well too.||-tristan"


jessmsg.addEventListener("click", () => {
    setup(jesstext, shownjess);
    shownjess = true;
})

regularcasmsg.addEventListener("click", () => {
    setup(regularcastext, shownregularcas);
    shownregularcas = true;
})

ekmsg.addEventListener("click", () => {
    setup(ektext, shownek);
    shownek = true;
})

boycasmsg.addEventListener("click", () => {
    setup(boycastext, shownboycas);
    shownboycas = true;
})

tristanmsg.addEventListener("click", () => {
    setup(tristantext, showntristan);
    showntristan = true;
})

// close when clicked outside the window
window.onclick = function(event) {
  if (event.target == msgwindow) {
    msgwindow.style.display = "none";
  }
}

let currentmsg;
let currentmsgshown;
function setup(msg, shown) {
    i = 0;
    delay = 0;
    currentmsg = msg
    currentmsgshown = shown;
    msgbox.innerHTML = "";
    msgwindow.style.display = "block";
    if (!shown) {
        typewriter();
    } else {
        msgbox.innerHTML = msg.replaceAll('|', '<br/>');
    }
}

let i = 0;
let delay;
// do a cool scramble thing if you add more characters to the letters variable
let letters = '|';
let j = 0;
function typewriter() {
    msgbox.innerHTML = msgbox.innerHTML.slice(0, -1);
    let delay = Math.random() * 100;
    if (i < currentmsg.length && msgwindow.style.display == "block") {
        if (currentmsg.charAt(i) == '|') {
            msgbox.innerHTML += "<br/>";
            delay = 500;
        }
        else {
            msgbox.innerHTML += currentmsg.charAt(i);
        }
        msgbox.innerHTML += letters.charAt(j);
        j++;
        j %= letters.length;
        i++;
    } else {
        return;
    }
    
    setTimeout(typewriter, delay);
}