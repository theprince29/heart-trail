onload = () =>{
        document.body.classList.remove("container");
};
const bodyE1 = document.querySelector("body");
let pressTimer;

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
    const xPos = event.clientX;
    const yPos = event.clientY;
    createSpan(xPos, yPos);
});

// Touchmove event listener
bodyE1.addEventListener("touchmove", (event) => {
    event.preventDefault(); // Prevent default touch behavior
    const touch = event.touches[0];
    const xPos = touch.clientX;
    const yPos = touch.clientY;
    createSpan(xPos, yPos);
});

// Click/tap event listener
bodyE1.addEventListener("click", (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;
    createSpan(xPos, yPos);
});

// Long tap/press event listener
bodyE1.addEventListener("mousedown", (event) => {
    pressTimer = setTimeout(() => {
        const xPos = event.clientX;
        const yPos = event.clientY;
        createSpan(xPos, yPos);
    }, 1000); // Adjust this value (in milliseconds) to define the duration for a long press
});

bodyE1.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});
