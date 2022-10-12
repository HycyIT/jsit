const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const div = document.querySelector('.square')

const text = () => {
    console.log('cześć')
}

const test1 = () =>{
    div.style.background = 'tomato'
}
const test2 = () =>{
    div.style.background = 'royalblue'
}

const toggle = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

btn1.addEventListener('dblclick',text)
div.addEventListener('mouseenter',test1)
div.addEventListener('mouseleave',test2)
btn2.addEventListener('click',toggle)
