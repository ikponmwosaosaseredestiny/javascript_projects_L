let body = document.querySelector('body');
let x_pos = document.getElementById('x-position');
let y_pos = document.getElementById('y-position');

body.addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    let y = event.offsetY;

    x_pos.innerText = x;
    y_pos.innerText = y;
})