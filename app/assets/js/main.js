NodeList.prototype.indexOf = Array.prototype.indexOf;
function hexClicked(j, f) {
  var idA = `.p${f}${j}`;
  var eClicked = document.querySelector(idA).parentNode;
  const list = document.querySelectorAll('#abg > div');
  var arr = Array.prototype.slice.call(eClicked.parentNode.children)
  let index = arr.indexOf(eClicked);
  var previous, current, next;    
  for (var i = 0; i < arr.length; i++) {
    
    setTimeout(()=>{
      if (index <= arr.length) {
        index += 1;
      } else {
        index = 0;
      }
      if (eClicked && eClicked.parentNode) {
        previous=arr[index==0?arr.length-1:index-1];
        current=arr[index];
        next=arr[index==arr.length-1?0:index+1];
        i === 0 && current ? current.style.opacity = 0 : null;
        previous ? previous.style.opacity = 0 : null;
        next ? next.style.opacity = 0 : null;
      }
      
    }, (2000/(i+1))+i*15);
  }
}

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
            inner = `<div class="hexagon p${f}${i}" style="transform: translate(${i === -1 ? 75 : -i*150}%, ${i === -1 ? f == 0 ? -100 : f*100 : f == 0 ? -50 : f * 50}%) rotate(90deg);"><div class="inner in" onclick="hexClicked(${i}, ${f});">${hexagonIcon}</div></div>`;
          } else if (i % 2 && !(f == 2 && i == -3)) {
            inner = `<div class="hexagon p${f}${i}" style="transform: translate(${(i === 0 ? 1 : -i)*75 - 150}%, ${f * 50}%) rotate(90deg);"><div class="inner in" onclick="hexClicked(${i}, ${f});">${hexagonIcon}</div></div>`;
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
  if (slide) {
    if (ixxAnim) {
      clearInterval(ixxAnim);
    }
    const innerTarget = document.querySelectorAll(".hexagon .inner")
    innerTarget.forEach(e=>e.classList.remove("out"));
    intervalSleeper = true;
    setTimeout(()=>{intervalSleeper = false}, 2064);
  } else {
    
  }
  var ixxAnim = setInterval(function(){
    if (!intervalSleeper) {
      const tgt = document.querySelectorAll(".hexagon .inner");
      const randomP = Math.floor(Math.random() * (tgt.length + 1));
      if (tgt[randomP]) {
        tgt[randomP].classList.toggle("out");
      }
      if (tgt[randomP -1]) {
        tgt[randomP - 1].classList.toggle("out");
      }
      if (tgt[randomP +1]) {
        tgt[randomP + 1].classList.toggle("out");
      }
      if (tgt[randomP -2]) {
        tgt[randomP - 2].classList.toggle("out");
      }
      if (tgt[randomP +2]) {
        tgt[randomP + 2].classList.toggle("out");
      }
      if (tgt[randomP -3]) {
        tgt[randomP - 3].classList.toggle("out");
      }
      if (tgt[randomP +3]) {
        tgt[randomP + 3].classList.toggle("out");
      }
      if (tgt[randomP -4]) {
        tgt[randomP - 4].classList.toggle("out");
      }
      if (tgt[randomP +4]) {
        tgt[randomP + 4].classList.toggle("out");
      }
    } else {
      return
    }
  }, 64);
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
    setTimeout(function(){targ[position].classList.add("animate")}, 1024);
  } else {
    targ.forEach(function(e, i) {
      if (i !== position) {
        e.classList.remove("active");
        setTimeout(function(){e.classList.add("animate")}, 1024);
      } else {
        e.classList.remove("animate");
        setTimeout(function(){e.classList.add("active")}, 128);
      }
    });
  }
}
function removeImages(except) {
  const target = document.getElementById("imgCT").children;
  for (var i = 0; i <= target.length; i++) {
    console.log(target, i, target[i]);
    if (i !== except && i < 2) {
      target[i].classList.remove("active");
    }
  }
}

function changeImage(position) {
  const targetA = document.getElementById("p-"+position);
  const targetB = document.getElementById("sp-"+position);
  targetA.classList.add("active");
  targetB.classList.add("active");
  removeImages(1);
}
function addingMenuLogic() {
  randomAnimate(true);
  const target = document.querySelector("#ccubes .cube");
  target.style.transform = positions[positionsArr[nextPosition]];
  if (nextPosition > 0) {
    changeActivePosition(nextPosition - 1);
    changeImage(nextPosition);
  } else if (nextPosition === 0 && clicked) {
    changeActivePosition(4, true);
  }
  nextPosition >= 5 ? nextPosition = 0 : nextPosition += 1;
  clicked = true;
}

function goToPreviousSlide() {
  nextPosition = nextPosition - 2;
  addingMenuLogic();
}

window.onload = (event) => {
    initOld();
    randomAnimate();
    //setTimeout(()=> hexClicked(1,2), 3300);
    addingMenuLogic();
};

function closeSlide() {
  changeActivePosition(nextPosition - 2, true);
}
document.querySelector("#ccubes .cube").addEventListener("click", addingMenuLogic, false);
document.querySelectorAll(".glass button.next").forEach((e)=>e.addEventListener("click", addingMenuLogic, false));
document.querySelectorAll(".glass button.prev").forEach((e)=>e.addEventListener("click", goToPreviousSlide, false));
document.querySelectorAll(".glass button.close").forEach((e)=>e.addEventListener("click", closeSlide, false));



