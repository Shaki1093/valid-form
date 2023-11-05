const FName = document.getElementById('name');
const LName = document.getElementById('LName');
const email = document.getElementById('Email');
const pass = document.getElementById('password');
const btn = document.getElementById('button');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const formToJson = document.querySelector('.form');

const red = document.querySelector(".input");


form.addEventListener('submit', (e) => {
    let message = [];

    if(FName.value === '' || FName.value == null){
        message.push('Name is required');
        
    }

    if(LName.value === '' || LName.value == null){
        message.push('Last Name is required');
        
    }

    if(email.value === '' || email.value == null){
        message.push('email is required');
        
    }

    if(pass.value === '' || pass.value == null){
        message.push('password is required');
        
    }

    if(message.length > 0){
        e.preventDefault();
        errorElement.innerHTML = message.join(', ');
    }
})

formToJson.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new FormData(formToJson);
    const data = Object.fromEntries(formData);

    console.log(data);
    fetch('https://reqres.in/api/users'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }.then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

