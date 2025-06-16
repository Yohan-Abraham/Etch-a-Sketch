const button = document.querySelector(".btn");





const containter = document.querySelector(".container");

for (let i = 0; i < 256; i++) {

    const box = document.createElement("div");
    box.classList.add("box");
    containter.appendChild(box);
}

const square = document.querySelectorAll(".box");

square.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "blue";
    });
});