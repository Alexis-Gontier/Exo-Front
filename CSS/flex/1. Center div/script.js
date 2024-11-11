const square = document.querySelector('#square')

square.addEventListener('click', () => {
    square.style.background = "red"
})

square.addEventListener('mouseover', () => {
    square.style.transform = "rotate(180deg)"
})