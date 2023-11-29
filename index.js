const bodyE1 = document.querySelector("body");

// Function to create a span element
function createSpan(x, y) {
    const spanE1 = document.createElement("span");
    const size = Math.random() * 100;

    spanE1.style.left = x + "px";
    spanE1.style.top = y + "px";
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";

    bodyE1.appendChild(spanE1);

    setTimeout(() => {
        spanE1.remove();
    }, 3000);
}

// Mousemove event listener
bodyE1.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    createSpan(xPos, yPos);
});

// Click/tap event listener
bodyE1.addEventListener("click", (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;
    createSpan(xPos, yPos);
});
