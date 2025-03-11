let user_id = document.getElementById('user-identification');
let user_id_text = document.getElementById('input-box-user-placeH');

let user_pass = document.getElementById('user-password');
let user_pass_btn = document.getElementById('input-box-password-btn');
let user_pass_text = document.getElementById('input-box-password-text');


user_id.addEventListener('keyup', () => {
    if (user_id.value == '') {
        user_id_text.style.fontSize = '11px';
        user_id_text.style.top = '0px'
        user_id.style.marginTop = '0px'
    }
})

user_id.addEventListener('keydown', (event) => {
    if (event.key != 'Backspace') {
        user_id_text.style.fontSize = '9px';
        user_id_text.style.top = '-8px'
        user_id.style.marginTop = '10px'
    }
})


user_pass.addEventListener('keydown', (event) => {
    if (event.key != 'Backspace') {
        user_pass_text.style.fontSize = '9px';
        user_pass_text.style.top = '-8px'
        user_pass.style.marginTop = '10px'
        user_pass_btn.style.display = 'block';
    }
})




user_pass.addEventListener('keyup', (event) => {

    if (user_pass.value == '') {
        user_pass_text.style.fontSize = '11px';
        user_pass_text.style.top = '0px'
        user_pass.style.marginTop = '0px'
        user_pass_btn.style.display = 'none'
    }

})


user_pass_btn.addEventListener('click', () => {
    if (user_pass.type === "password") {
        user_pass.type = "text";
        user_pass_btn.innerHTML = 'Hide'
    } else {
        user_pass.type = "password";
        user_pass_btn.innerHTML = 'Show'
    }

})