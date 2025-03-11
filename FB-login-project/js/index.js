let toggle_password = document.getElementById('toggle-password-state-div');

let password_input = document.getElementById('password-input');

let password_icon = document.getElementById('toggle-see-pass-icon');



password_input.addEventListener('keyup', () => {

    console.log(password_input.value)
    if (password_input.value == '') {
        toggle_password.style.display = 'none';
    } else {
        toggle_password.style.display = 'inline-block';
    }

})


toggle_password.addEventListener('click', () => {
    if (password_input.type == 'password') {
        password_input.type = 'text';
        password_icon.src = 'assets/hide-password.png';
    } else {
        password_input.type = 'password';
        password_icon.src = 'assets/see-password.png';
    }
})