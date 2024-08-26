document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'jordan';
    const correctPassword = 'jordan';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert("login berasil");
        window.location.href = 'index.html';
    }else{
        alert("username atau password tidak sesuai");
    }
});
    