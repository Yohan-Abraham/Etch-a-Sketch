const container = document.querySelector(".container");
const button = document.querySelector("#btn");
const CONTAINER_SIZE = 960;

function generateGrid(size) {
    container.innerHTML = "";

    const boxSize = CONTAINER_SIZE / size;

    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.addEventListener("mouseover", () => {
            box.style.background = "red";
        });
        container.appendChild(box);
    }
}

button.addEventListener("click", () => {
    let newSize = prompt("Enter a new size for the grid. Max size is 100");
    newSize = parseInt(newSize);

    if (newSize > 100) {
        alert("The number is greater than 100!");
        return;
    }

    generateGrid(newSize);
});

generateGrid(16);