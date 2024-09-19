const passwordEl = document.getElementById('password');
const buttonEl = document.getElementById('btn');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789,.;:?-_*&%$#@!^/'
let passLength = 8;
let password = '';

buttonEl.addEventListener('click', generatePass)

function generatePass(){

  for(i = 0; i <= passLength; i++){
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordEl.value = password;
  console.log(password);
 
}
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password Copied");
//   passwordEl.value = '';
});

