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
    }, 100);
  }

function initAgain() {
  polygonArr = [];
  intervalIx = 0;
  x.innerHTML = "";
  init();
}

window.onload = (event) => {
    initOld();
    setTimeout(()=> hexClicked(1,2), 3300);
};
