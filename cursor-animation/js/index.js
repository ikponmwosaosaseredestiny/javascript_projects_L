let body = document.querySelector('body');
let x_pos = document.getElementById('x-position');
let y_pos = document.getElementById('y-position');

body.addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    let y = event.offsetY;

    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.top = y + 'px';

    const size = Math.random() * 100;
    span.style.width = size + 'px';
    span.style.height = size + 'px';

    body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 3000);


})