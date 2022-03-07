

const createItem = () => {
    const div = document.createElement('div');
    const posX = Math.floor(Math.random() * (innerWidth - 200))
    const posY = Math.floor(Math.random() * (innerHeight - 200))
    div.classList.add('fpig');
    div.style.left = posX + 'px';
    div.style.top = posY + 'px';
    return div
}

const container = document.querySelector(".container");
    for (let i = 0; i < 7; i++) {
    container.appendChild(createItem());
    }
const nodeList = document.getElementsByClassName("fpig")
const nodeArray = [...nodeList]

const followCursor = (e) => {
    e.target.style.left = e.clientX + "px"
    e.target.style.top = e.clientY + "px"
    e.stopPropagation()
    console.log(e.target)
}

const joinSnake = () => {
    for (const node of nodeArray) {
        node.addEventListener('mousemove', followCursor);
    }
}

window.addEventListener('load', joinSnake)

/* pseudocode:
    when mouseover the target, add mousemove to the target and move the target with cursor.
    Every subsequent target added, should move according to previous target*/

