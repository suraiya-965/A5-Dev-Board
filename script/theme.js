const themeButton = document.getElementById("theme-bg");

const colors = ["#8B0000", "#0B3D91", "#800000", "#4B0082", "#006400", "8B4513","#483D8B","#5D3A3A"];


let currentColor = 0;

themeButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.style.backgroundColor = colors[currentColor];
    currentColor++; 
    if (currentColor >= colors.length) {
        currentColor = 0;
    }
});
