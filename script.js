const parallax = document.getElementById("parallax");
const parallax2 = document.getElementById("parallax2");

const concepting = document.getElementById("blueprinting");
const visual = document.getElementById("pixelMagic");
const tech = document.getElementById("codecraft");

const conceptingText = document.getElementById("concepting");
const visualText = document.getElementById("visual");
const techText = document.getElementById("tech");

function defaultDisplay() {
    conceptingText.style.display = 'block';
    concepting.classList.add('selected')
}
defaultDisplay()

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.4 + "px";
  parallax2.style.backgroundPositionY = offset * 0.4 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

function display(expertise) {
    if(expertise == 'concepting') {
        conceptingText.style.display = 'block';
        visualText.style.display = 'none';
        techText.style.display = 'none';
        concepting.classList.add('selected')
        visual.classList.remove('selected')
        tech.classList.remove('selected')
    } else if(expertise == 'visual') {
        conceptingText.style.display = 'none';
        visualText.style.display = 'block';
        techText.style.display = 'none';
        concepting.classList.remove('selected')
        visual.classList.add('selected')
        tech.classList.remove('selected')
    } else {
        conceptingText.style.display = 'none';
        visualText.style.display = 'none';
        techText.style.display = 'block';
        concepting.classList.remove('selected')
        visual.classList.remove('selected')
        tech.classList.add('selected')
    }
}

// Met een loop steeds plus één erbij tellen. wanneer er niks meer is om overheen te itereren donkere overlay met socials
function hover(img)
{
//  img.src = "./images/person2.jpg"
}

// Custom cursor

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursorinner.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursorinner.classList.remove('hover');
  });
})

console.log('What are you doing in my swamp?')