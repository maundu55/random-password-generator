const passwordEl = document.getElementById('password');
const buttonEl = document.getElementById('btn');

 let password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789,.;:?-_*&%$#@!^/'
let passLength = 12;

buttonEl.addEventListener('click', generatePass)

function generatePass(){
    let randomPassword = '';
  passwordEl.value = randomPassword;

  while(password.length == passLength){
    randomPassword = Math.floor(Math.random() *password)*passLength;
  }
  console.log(randomPassword);
  passwordEl.value = '';
  console.log('again')
  
  
}
generatePass();