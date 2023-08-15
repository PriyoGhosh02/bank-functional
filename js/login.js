// step-1
document.getElementById('btn_submit').addEventListener('click', function(){
// step-2
const mailField=document.getElementById('user_email');
const email=mailField.value;
// password
const passwordField=document.getElementById('user_password');
const password=passwordField.value;
// Danger Don't try again
if(email==='priyoghosh02@gmail.com'&& password==='priyo'){
    window.location.href='bank.html';
}else{
    alert('invalid User!!! Your Inputs is Wrong');
    mailField.value='';
    passwordField.value='';
}
})