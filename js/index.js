// Lines 2 - 12 populates the page with boxes
const boxWidth = () => {
    const container = document.querySelector(".container")
    const box = document.querySelector(".box")
    container.innerHTML = box.outerHTML.repeat(100)
}

boxWidth()

const outterContainer = document.querySelector('.outter-container')
const oneLine = document.querySelector('.container')
outterContainer.innerHTML = oneLine.outerHTML.repeat(67)

// lines 15 - 25 sets the event listener changes the background colour
const boxes = document.querySelectorAll('.box')

for (var i = 0; i < boxes.length; i++) {
    // option1 = changes colour on hover
    // boxes[i].addEventListener('pointerover', function(e) {
    //     e.target.style.backgroundColor = 'rgb(152, 247, 239)';
    // })
    // boxes[i].addEventListener('pointerover', function(e) {
    //     e.target.style.border = '1px solid rgb(138, 226, 219)';
    // })

    // option 2 = changes colour onclick
    boxes[i].addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'purple';
    })
}
