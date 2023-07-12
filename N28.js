let computers = [
    {
        id: 1,
        img: 'data:image/png;base64,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',
        cpu: 'inter core i7',
        ram: 16,
        rom: 512,
        price: 1500
    }, {
        id: 2,
        img: 'https://bermud.az/153519-large_default/noutbuk-acer-aspire-a315-57g-nxhzrer017-core-i5.jpg',
        cpu: 'inter core i7',
        ram: 8,
        rom: 1,
        price: 1200
    }
]

const login = document.querySelector('.login')
const logout = document.querySelector('.logout')
const register = document.querySelector('.register')
function f1(){
    login.style.display = 'none'
    register.style.display = 'none'
    logout.style.display = 'inline-block'
}
function f2(){
    login.style.display = 'inline-block'
    register.style.display = 'inline-block'
    logout.style.display = 'none'
}
const cpu = document.getElementById('cpu')
const rom = document.getElementById('rom')
const ram = document.getElementById('ram')
const price = document.getElementById('price')
let id = 2
const cards = document.querySelector('.cards')
let elem;
let myEl;
let elem2;
let l = 0
function addComputer(){
    id++
    elem = document.createElement('div')
    elem.className = 'card'
    elem.id = 'a' + String(id)
    myEl = document.createElement('img')
    myEl.src = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png'
    elem.appendChild(myEl)
    elem2 = document.createElement('div')
    elem2.className = 'info'
    myEl = document.createElement('p')
    myEl.innerHTML = 'CPU: ' + cpu.value
    elem2.appendChild(myEl)
    myEl = document.createElement('p')
    myEl.innerHTML = 'ROM: ' + String(rom.value) + 'GB'
    elem2.appendChild(myEl)
    myEl = document.createElement('p')
    myEl.innerHTML = 'RAM: ' + String(ram.value) + 'GB'
    elem2.appendChild(myEl)
    myEl = document.createElement('p')
    myEl.innerHTML = 'Price: ' + String(price.value) + '$'
    elem2.appendChild(myEl)
    elem.appendChild(elem2)
    myEl = document.createElement('button')
    myEl.innerHTML = 'Details'
    myEl.className = 'details'
    elem.appendChild(myEl)
    myEl = document.createElement('button')
    myEl.innerHTML = 'X'
    myEl.className = 'x'
    myEl.id = String(id)
    elem.appendChild(myEl)
    cards.appendChild(elem)
    l = computers.length
    computers[l] = {}
    computers[l].id = id
    computers[l].img = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Crystal_Project_computer.png'
    computers[l].cpu = cpu.value
    computers[l].ram = ram.value
    computers[l].rom = rom.value
    computers[l].price = price.value
}
function handleClick(e){
    if(e.target.innerHTML === 'X'){
        cards.removeChild(document.getElementById('a' + String(e.target.id)))
    }
}
cards.addEventListener('click', handleClick)