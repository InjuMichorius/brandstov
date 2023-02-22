const parallax = document.getElementById("parallax");
const concepting = document.getElementById("concepting");
const visual = document.getElementById("visual");
const tech = document.getElementById("tech");
// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.4 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

function display(expertise) {
    if(expertise == 'concepting') {
        concepting.style.display = 'block';
        visual.style.display = 'none';
        tech.style.display = 'none';
    } else if(expertise == 'visual') {
        concepting.style.display = 'none';
        visual.style.display = 'block';
        tech.style.display = 'none';
    } else {
        concepting.style.display = 'none';
        visual.style.display = 'none';
        tech.style.display = 'block';
    }
}

console.log('What are you doing in my swamp?')