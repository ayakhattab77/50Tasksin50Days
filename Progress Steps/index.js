let prevbtn = document.getElementById('prev');
let nextbtn = document.getElementById('next');
let progressBar = document.getElementsByClassName('progressbar')[0];

let activeCircles = 1;

prevbtn.addEventListener('click', function(){
    let nextlst = nextbtn.classList;
    let prevlst = prevbtn.classList;

    if(!prevlst.contains('inactivebtn'))
    {
        if(nextlst.contains('inactivebtn'))
        nextbtn.classList.remove('inactivebtn');

        let lessCircle = document.querySelectorAll('.activeCircle')[activeCircles-1].classList.remove('activeCircle');
        activeCircles--;
        if(activeCircles == 1) 
            prevbtn.classList.add('inactivebtn')
        updateProgress();
    }
});

nextbtn.addEventListener('click', function(){
    let nextlst = nextbtn.classList;
    let prevlst = prevbtn.classList;

    if(!nextlst.contains('inactivebtn'))
    {
        if(prevlst.contains('inactivebtn'))
        prevbtn.classList.remove('inactivebtn');
    
        let newCircle = document.querySelectorAll('.activeCircle')[activeCircles-1].nextElementSibling.classList.add('activeCircle');
        activeCircles++;
        if(activeCircles == 4) 
            nextbtn.classList.add('inactivebtn')
        updateProgress();
    }
});

function updateProgress(){
    let progressPercentage = ((document.querySelectorAll('.activeCircle').length - 1) /  3) * 100 + '%';
    progressBar.style.width = progressPercentage;
}
