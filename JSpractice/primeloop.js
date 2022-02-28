const para = document.createElement('p')
window.addEventListener('DOMContentLoaded', (event) => {

let i = 10;


function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
        else {
            return true
        }
    }
}

for(i = 2; i < 10; i++){
    if(isPrime(i)) {
        para.textContent += `${i},`
    }
    continue;
}
para.textContent = para.textContent.replace(/,/g, ", ")
para.textContent = para.textContent.slice(0,para.textContent.length -2) + "."

const section = document.querySelector('section');
section.appendChild(para);
})