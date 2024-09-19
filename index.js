const passwordEl = document.getElementById("password");
const buttonEl = document.getElementById("btn");

buttonEl.addEventListener("click", generatePass);

function generatePass() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789,.;:?-_*&%$#@!^/";
  let passLength = 8;
  let password = "";

  for (i = 0; i <= passLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordEl.value = password;
}
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password Copied");
});
