const gridContainer = document.querySelector(".grid");
let gridPixels;

document.addEventListener("DOMContentLoaded", function() {
    /* Creates a 16 x 16 grid on page load, detects the pixels of the grid
    and adds an event listener to them to call paintPixel() function on hover */
    createGrid(16);
    detectPixels();
    gridPixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", paintPixel);
    });
});

function createGrid(size) {
    /* Creates grid of size x size, with a limit of size 100 */
    if (size > 100) {
        throw new Error("Parameter size exceeds max value of 100");
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
    /* Updates gridPixels to contain all elements of class ".grid-pixel" */
    gridPixels = document.querySelectorAll(".grid-pixel");
}

function paintPixel(event) {
    /* Paints pixel on mouse hover */
    const pixel = event.currentTarget;
    pixel.classList.add("painted-pixel");
}