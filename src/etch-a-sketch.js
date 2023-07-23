const gridContainer = document.querySelector(".grid");

// Create a 16 x 16 grid on page load
document.addEventListener("DOMContentLoaded", function() {
    createGrid(16);
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