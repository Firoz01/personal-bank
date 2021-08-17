

document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passWordField = document.getElementById('user-password');
    const userPassWord = passWordField.value;

    if (userEmail == 'suvrow9@gmail.com' && userPassWord == 'suvrow9')
        window.location.href = 'banking.html';
    else
        console.log('non valid');
});