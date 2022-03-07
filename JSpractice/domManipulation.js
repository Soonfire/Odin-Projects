const container = document.querySelector("#container");
const para = document.createElement("p");
    para.style.color = "red";
    para.textContent = "Hey I'm red!";
const h3 = document.createElement("h3");
    h3.style.color = "blue";
    h3.textContent = "I'm a blue h3";
const div = document.createElement("div");
    div.setAttribute('style', 'border: black; background-color: pink');
        const h1 = document.createElement("h1");
        h1.textContent = "I'm in a div"
        const anotherPara = document.createElement("p");
        anotherPara.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(anotherPara);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);
