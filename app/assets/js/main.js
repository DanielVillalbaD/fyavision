const x = document.getElementById("abg");
const figPerFile = 10;
let intervalIx = 0;
let polygonArr = [];
let intervalSleeper = false;

function draw(files) {
  let randomP = Math.floor(Math.random() * (polygonArr.length + 1));
  if (polygonArr[randomP]) {
    appendPolygon(polygonArr[randomP]);
    polygonArr.splice(randomP, 1);
  }
}

const hexagonsRar = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 143 164" xml:space="preserve"><g transform="matrix(1 0 0 1 71.6 82.45) scale(1.0225, 0.8875)" id="hexagonIcon"><path style="stroke: inherit; stroke-width: 3; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" translate(-127.83, -131.66)" d="m 197.92817 172.13075 l -70.10232 40.47359 l -70.102321 -40.4736 l 0 -80.947185 l 70.102321 -40.473594 l 70.10232 40.473595 z" stroke-linecap="round"/></g></svg>`;
const hexagonIcon = `<svg class="hex" viewBox="0 0 149 156"><use xlink:href="#hexagonIcon"></use></svg>`;
function addElements(nFiles, ix = intervalIx) {
    for (var f = -1; f <= nFiles; f++) {
      for (var i = -3; i <= figPerFile + 1; i++) {
          var inner = '';
          if (f % 2) {
            inner = `<div class="hexagon p${f}${i}" style="transform: translate(${i === -1 ? 75 : -i*150}%, ${i === -1 ? f == 0 ? -100 : f*100 : f == 0 ? -50 : f * 50}%) rotate(90deg);"><div class="inner in">${hexagonIcon}</div></div>`;
          } else if (i % 2 && !(f == 2 && i == -3)) {
            inner = `<div class="hexagon p${f}${i}" style="transform: translate(${(i === 0 ? 1 : -i)*75 - 150}%, ${f * 50}%) rotate(90deg);"><div class="inner in">${hexagonIcon}</div></div>`;
          }
          polygonArr.push(inner);
        }
    }
  }

function appendPolygon(inner) {
  const figure = document.createElement('div');
  figure.innerHTML = inner;
  x.appendChild(figure);
}

function calculateFiles() {
  return Math.ceil(window.innerHeight / (window.innerWidth / figPerFile)* 2);
}

function init() {
  appendPolygon(hexagonsRar);
  const nFiles = calculateFiles();
  addElements(nFiles, intervalIx);
  for (var i = 0; i < nFiles * figPerFile / 2 || polygonArr.length > 0; i++) {
      draw(nFiles);
  }
}

function initOld() {
    appendPolygon(hexagonsRar);
    const nFiles = calculateFiles();
    addElements(nFiles, intervalIx);
    var ixxInt = setInterval(function() {
      if (intervalIx < nFiles * figPerFile / 2 || polygonArr.length > 0) {
        intervalIx += 1;
        draw(nFiles);
      } else {
        clearInterval(ixxInt);
      }
    }, 10);
  }

function initAgain() {
  polygonArr = [];
  intervalIx = 0;
  x.innerHTML = "";
  init();
}

function randomAnimate(slide = false) {
  if (slide && ixxAnim) {
    clearInterval(ixxAnim);
  }
    var ixxAnim = window.setInterval(function(){
      const tgt = document.querySelectorAll(".hexagon .inner");
      const randomP = Math.floor(Math.random() * (tgt.length));
      const max = 200;

      for (var m = -max; m <= max; m++) {
        if (tgt[randomP + m]) {
          tgt[randomP + m].classList.toggle("out");
        }
        if (tgt[tgt.length - randomP + m]) {
          tgt[tgt.length - randomP + m].classList.toggle("out");
        }
      }
    }, 2048);
  }

const positions = {
  'right':  `translateZ(25px) rotateY(-84deg) rotateX(-0deg) rotateZ(2deg)`,
  'front': `translateZ(25px) rotateY(5deg) rotateX(5deg) rotateZ(0deg)`,
  'back': `translateZ(25px) rotateY(-177deg) rotateX(-2deg) rotateZ(0deg)`,
  'left': `translateZ(35px) rotateY(95deg) rotateX(-0deg) rotateZ(5deg)`,
  'top': `translateZ(30px) rotateY(-88deg) rotateX(-90deg) rotateZ(95deg)`,
  'bottom': `translateZ(30px) rotateY(-90deg) rotateX(-270deg) rotateZ(-88deg)` 
}

var clicked = false;
var nextPosition = 0;
const positionsArr = ["front", "right", "back", "left", "top", "bottom"];

function changeActivePosition(position, fixed = false){
  const targ = document.querySelectorAll(".glass");
  if (fixed) {
    targ[position].classList.remove("active");
    setTimeout(function(){targ[position].classList.add("animate")}, 768);
  } else {
    targ.forEach(function(e, i) {
      if (i !== position) {
        e.classList.remove("active");
        if (position !== 0 && !clicked) {
          setTimeout(function(){e.classList.add("animate")}, 768);
        }
      } else {
        setTimeout(function(){e.classList.remove("animate")}, 742);
        setTimeout(function(){e.classList.add("active")}, 768);
      }
    });
  }
}
function removeImages() {
  document.querySelectorAll("#imgCT > picture").forEach((e)=>{
    e.classList.remove("active");
  });
  document.querySelectorAll("#imgCT > div").forEach((e)=>{
    e.classList.remove("active");
  });
}

function changeImage(position) {
  removeImages();
  const targetA = document.getElementById("p-"+position);
  targetA.classList.add("active");
  if (position !== 5) {
    const targetB = document.getElementById("sp-"+position);
    targetB.classList.add("active");
  }
  if (position === 4 || position === 0) {
    x.classList.add("light");
    x.classList.remove("map");
    x.parentNode.parentNode.parentNode.classList.remove("p5");
  } else if (position === 5) {
    x.classList.add("map");
    x.classList.remove("light");
    x.parentNode.parentNode.parentNode.classList.add("p5");
  } else {
    x.classList.remove("light");
    x.classList.remove("map");
    x.parentNode.parentNode.parentNode.classList.remove("p5");
  }
}
function addingMenuLogic(restore = false) {
  if (restore === true) { nextPosition -= 1; }
  const target = document.querySelector("#ccubes .cube");
  target.style.transform = positions[positionsArr[nextPosition]];
  if (nextPosition === 0 && clicked) {
    changeActivePosition(4, true);
  } else {
    changeActivePosition(nextPosition);
  }
  changeImage(nextPosition);
  nextPosition >= 5 ? nextPosition = 0 : nextPosition += 1;
  if (!clicked) {
    initOld();
  }
  clicked = true;
  randomAnimate(true);
}

function goToPreviousSlide() {
  nextPosition = nextPosition - 1;
  addingMenuLogic();
}

window.onload = () => {
    initOld();
    randomAnimate();
    addingMenuLogic();
    initClock();
};

function closeSlide() {
  if (nextPosition === 0 && clicked) {
    changeActivePosition(5, true);
  } else {
    changeActivePosition(nextPosition - 1, true);
  }
}

document.querySelector("#ccubes .cube").addEventListener("click", addingMenuLogic, false);
document.querySelectorAll(".glass button.next").forEach((e)=>e.addEventListener("click", addingMenuLogic, false));
document.querySelectorAll(".glass button.prev").forEach((e)=>e.addEventListener("click", goToPreviousSlide, false));
document.querySelectorAll(".glass button.close").forEach((e)=>e.addEventListener("click", closeSlide, false));
document.querySelectorAll(".glass button.restore").forEach((e)=>e.addEventListener("click", ()=>addingMenuLogic(true), false));
document.querySelectorAll(".glass button.hideBtn").forEach((e)=>e.addEventListener("click", ()=>hideElement(e), false));

function hideElement(e) {
  e.parentNode.parentNode.style.opacity = "0";
}

function initClock() {
  const deg = 6;
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".min");
  const sec = document.querySelector(".sec");
  const setClock = () => {
    let day = new Date(new Date().toLocaleString("en-US", {timeZone: 'Europe/Madrid'}));
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let sd = day.getDay();
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
    openingHours(sd, hh, mm);
  };
  setClock();
  setInterval(setClock, 1000);
}
const door = document.getElementById("door");
function openingHours(d, h, m) {
  const hour = h/30 + "." + m/6;
  if (openingDates[d].m && hour >= openingDates[d].m.split("-")[0] && hour <= openingDates[d].m.split("-")[0]) {
    door.innerText = "ABIERTO";
  } else {
    door.innerText = "CERRADO";
  }
}

const openingDates = {
  "0": {
    "m": false,
    "t": false
  },
  "1": {
    "m": "10-14",
    "t": "17-20.30"
  },
  "2": {
    "m": "10-14",
    "t": "17-20.30"
  },
  "3": {
    "m": "10-14",
    "t": "17-20.30"
  },
  "4": {
    "m": "10-14",
    "t": "17-20.30"
  },
  "5": {
    "m": "10-14",
    "t": "17-20.30"
  },
  "6": {
    "m": "10-14",
    "t": false
  }
}