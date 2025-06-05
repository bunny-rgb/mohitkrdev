// animation.js

const text = "Mohit Kumar";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("type-name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

// Trigger on page load
window.onload = typeWriter;