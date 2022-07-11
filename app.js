document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    if(login == 'Artem'&& password =="123"){
        alert('Welcome')
    }
    else if(login == 'Alex'&& password =="777"){
    alert('Welcome')
    }
    else{
        alert('Wrong login or password')
    }
}   