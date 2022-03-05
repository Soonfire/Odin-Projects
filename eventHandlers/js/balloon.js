const div = document.querySelector(".balloon")

const increaseSize = () => {
    let currentSize = window.getComputedStyle(div, null).getPropertyValue('font-size');
    currentSize = parseInt(currentSize)
    let addUp = 1.1;
    return currentSize * addUp + "px"
}
const decreaseSize = () => {
    let currentSize = window.getComputedStyle(div, null).getPropertyValue('font-size');
    currentSize = parseInt(currentSize)
    let addUp = 0.9;
    return currentSize * addUp + "px"
}



function balloonControl(e) {
    let currentSize = window.getComputedStyle(div, null).getPropertyValue('font-size');
    let currentSizeNumber = parseInt(currentSize);
        if (e.key === "ArrowUp") {
            div.style.fontSize = increaseSize();
            e.preventDefault()
            if (currentSizeNumber > 400) {
                div.textContent = "💥"
                window.removeEventListener('keydown', balloonControl);
            }
        };
        if (e.key === "ArrowDown") {
            div.style.fontSize = decreaseSize()
            e.preventDefault()
        }
};

window.addEventListener('keydown', balloonControl)