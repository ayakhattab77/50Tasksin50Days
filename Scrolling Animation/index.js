const boxes = document.getElementsByClassName('box');
document.addEventListener('DOMContentLoaded', showBoxes);
document.addEventListener('scroll', showBoxes);
function showBoxes(){
    for(let box in boxes){
        if(typeof boxes[box] !== 'function'){
            let rect = boxes[box].getBoundingClientRect();
            let top = rect.top;
            if(window.innerHeight - top >= 80){
                boxes[box].classList.add('show');
            } else {
                boxes[box].classList.remove('show');
            }
        }
    }
};
