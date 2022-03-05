

const createItem = () => {
    const div = document.createElement('div');
    const posX = Math.floor(Math.random() * (innerWidth - 200))
    const posY = Math.floor(Math.random() * (innerHeight - 200))
    div.classList.add('fpig');
    div.style.left = posX + 'px';
    div.style.top = posY + 'px';
    return div
}

function loadItems() {
    const container = document.querySelector(".container");
        for (let i = 0; i < 7; i++) {
            container.appendChild(createItem());
        }
}

window.addEventListener('load', loadItems)
