let figures = document.getElementsByTagName('figure');

[...figures].forEach(element => {
    element.addEventListener('click', makeActive);
});


function makeActive(e){
    [...figures].forEach(figure => figure.classList.remove('active'));
    e.currentTarget.classList.add('active');
}
