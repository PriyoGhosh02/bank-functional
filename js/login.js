// step-1
document.getElementById('btn_submit').addEventListener('click', function(){
// step-2
const mailField=document.getElementById('user_email');
const email=mailField.value;
console.log(email);
// password
const passwordField=document.getElementById('user_password');
const password=passwordField.value;
console.log(password);
// Danger Don't try again
if(email==='priyoghosh02@gmail.com'&& password==='priyo'){
    console.log('valid')
    window.location.href='bank.html';
}else{
    alert('invalid User!!! Your Inputs is Wrong')
}
})