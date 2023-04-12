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

console.log('What are you doing in my swamp?')