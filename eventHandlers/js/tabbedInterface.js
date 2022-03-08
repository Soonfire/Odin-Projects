function asTabs(node) {
    const ul = document.createElement('ul')
    node.appendChild(ul)
    const ulParent = document.querySelector('ul')
    const allDivs = document.querySelectorAll('div')
    const array = [...allDivs]
        array.forEach(element => {
        const li = document.createElement('li')
        ul.appendChild(li)
        const btn = document.createElement('button')
        li.appendChild(btn)
        btn.appendChild(element)
        });
}

asTabs(document.querySelector("tab-panel"));
