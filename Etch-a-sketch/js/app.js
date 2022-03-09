const gridItem = () => {
    const container = document.getElementById("container");
    const div = document.createElement('div');
    div.classList.add("gridCells")
        div.addEventListener('mouseover', () => {
            const randomColor1 = Math.floor(Math.random() * 100) + "%";
            const randomColor2 = Math.floor(Math.random() * 100) + "%";
            const randomColor3 = Math.floor(Math.random() * 100) + "%";
            div.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
        }, {once : true});
        div.addEventListener('mouseover', () => {
            let divColor;    
            divColor = div.style.backgroundColor;
            let rgbArray = getLightnessOfRGB(divColor);
            let newRgbArray = rgbArray.map(currentValue => currentValue - 26);
            div.style.backgroundColor = `rgb(${newRgbArray})`
        })
    return container.appendChild(div)
}
const createGrid = (x) => {
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${x}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${x}, 2fr)`
    );
        for (let i = 0; i < x * x; i++) {
            gridItem()
        }
}

const createButton = () => {
    const container = document.getElementById("container");
    const button = document.createElement('button');
   
    button.textContent = "Reset"
        button.addEventListener('click', () => {
            const allDiv = document.querySelectorAll(".gridCells");
            let userInput = prompt("How many squares per side would you like in the new grid?(max:100)");
                if(userInput === null || userInput === "" || userInput === 0 || userInput === 1){
                    userInput = 16
                }
                else if (userInput > 100) {
                    userInput = 100
                }
            allDiv.forEach(element => {
                element.remove()
            });
        createGrid(userInput);
        })
    document.body.insertBefore(button, container)
    
}

createButton();
createGrid(16);

function getLightnessOfRGB(rgbString) {
    const rgbIntArray = (rgbString.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e)));
    return rgbIntArray
}

