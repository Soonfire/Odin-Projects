

const createItem = () => {
    const div = document.createElement('div');
    posX = (Math.floor(Math.random() * (innerWidth - 200))) + 'px'
    posY = (Math.floor(Math.random() * (innerHeight - 200))) + 'px'
    div.classList.add('fpig');
    div.style.left = posX;
    div.style.top = posY;
    return div
    
}
console.log(createItem())
const container = document.querySelector(".container");
    for (let i = 0; i < 7; i++) {
        container.appendChild(createItem());
    }

const nodeList = document.getElementsByClassName("fpig")
const nodeArray = [...nodeList]

const followCursor = (e) => {
    e.target.style.left = (e.clientX - 53) + "px"
    e.target.style.top = (e.clientY - 53) + "px"
    e.stopPropagation()
    
}

const joinSnake = () => {
    for (const node of nodeArray) {
        node.addEventListener('mousemove', followCursor);
    }
}

window.addEventListener('mouseover', joinSnake)

/* pseudocode:
    when mouseover the target, add mousemove to the target and move the target with cursor.
    Every subsequent target added, should move according to previous target*/

