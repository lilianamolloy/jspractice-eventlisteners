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

// lines 15 - 23 sets the event listener changes the background colour on click
// const boxes = document.querySelectorAll('.box')

// for (var i = 0; i < boxes.length; i++) {

//     // option 2 = changes colour onclick
//     // boxes[i].addEventListener('click', function(e) {
//     //     e.target.style.backgroundColor = 'purple';
//     // })
// }

// lines 26 - 38 sets event listener on the parent div for efficiency on hover
const parent = document.querySelector('.outter-container')

parent.addEventListener('mouseover', changeColor)

function changeColor(e) {
  if(e.target.classList.contains('box')) {
    const box = e.target
    box.classList.add('color')
    setTimeout(function() {
        box.classList.remove('color')
    }, 5000)
  }
}
