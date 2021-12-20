


const container = document.querySelector("#container");
const btnReset = document.querySelector("#reset");
let grid = [];

const renderGrid = (gridSize) => {
    for (i = 0; i < (gridSize **2); i++) {
        grid[i] = document.createElement("div");
        grid[i].classList.add("grid");
        grid[i].setAttribute("style", "flex: 0 0 calc(" + (100 / gridSize) + "% - 1px)");
        grid[i].addEventListener("mouseover", function(e) {
            e.target.classList.add("hover");
        });
        container.appendChild(grid[i]);
    };
};
    
btnReset.addEventListener("click", () => {
    grid.forEach(removeHover);
    gridSize = window.prompt("Enter Gridsize:", "max. 100");
    gridSize = parseInt(gridSize);
    if (gridSize < 101 && typeof gridSize == "number") {
        grid.forEach(
            (e) => container.removeChild(e)
        )
        renderGrid(gridSize);
    } else {
        window.alert("ERROR, only enter Number and Nuber max. 100!");
    };
});

const removeHover = (e) => {
    e.classList.remove("hover");
};

renderGrid(10);


