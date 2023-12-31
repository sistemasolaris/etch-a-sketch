const colorOptions = document.querySelectorAll(".color")
const gridContainer = document.querySelector(".grid");
const gridButton = document.querySelector("#create-grid");
let gridPixels;
let currentColor = "black";

document.addEventListener("DOMContentLoaded", function() {
    /* Creates a 16 x 16 grid on page load, detects the pixels of the grid
    and adds an event listener to them to call paintPixel() function on hover */
    createGrid(16);
    detectPixels();
});

colorOptions.forEach((color) => {
    color.addEventListener("click", changeColor);
});

gridButton.addEventListener("click", () => {
    /* Creates a grid of inputted size when button is presses */
    const size = parseInt(prompt("What size should the grid be? Pick a number between 1 and 100:"));
    if (size >= 1 && size <= 100) {
        eraseGrid();
        createGrid(size);
        detectPixels()
    }
})

function createGrid(size) {
    /* Creates grid of size x size, with a limit of size 100 */
    if (size < 1 || size > 100) {
        throw new Error("Parameter size must be between 1 and 100");
    }

    for (let i = 0; i < size; i++) { // For every row
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", "grid-row");

        for (let j = 0; j < size; j++) { // For every column
            const gridPixel = document.createElement("div");
            gridPixel.setAttribute("class", "grid-pixel");
            gridRow.appendChild(gridPixel);
        }

        gridContainer.appendChild(gridRow);
    }
}

function eraseGrid() {
    /* Erases all children of gridContainer, clearing the 
    entire grid and preparing the creation of a new grid */
    gridContainer.innerHTML = "";
}

function detectPixels() {
    /* Updates gridPixels to contain all elements of class ".grid-pixel"
    and applies event listener to all pixel elements*/
    gridPixels = document.querySelectorAll(".grid-pixel");
    gridPixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", paintPixel);
    });
}

function paintPixel(event) {
    /* Paints pixel on mouse hover */
    const pixel = event.currentTarget;
    pixel.style.setProperty("background-color", currentColor);
}

function changeColor(event) {
    /* Changes currentColor to selected color */
    currentColor = event.currentTarget.getAttribute("id");
}