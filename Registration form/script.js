'use strict';

// select elements
const formEl=document.getElementById('form')

const usernameEl=document.getElementById('username')

const emailEl=document.getElementById('email')

const passwordEl=document.getElementById('password')


// functions
function ValidateEmail(inputText)
{
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return mailformat.test(inputText);
}

formEl.addEventListener('submit',(event) =>{
   event.preventDefault();
   const username=usernameEl.value.trim();
   const email=emailEl.value.trim();
   const password=passwordEl.value.trim();
   if(!username){
    alert('Username is Mandatory');
   }
   if(username.length<5){
    alert('Username must be greaterthan 5 characters');
   }
   else if (username > 12){
    alert('Username must be less than 12 characters');
   }
   
   if(!email){
    alert('Email is Mandatory')
   }
   if(!ValidateEmail(email)){
    alert('Email is Not Valid ')
   }
   if(!password){
    alert('Password is Mandatory')

    if(username.length<8){
        alert('Password must be greaterthan 8 characters');
       }
       else if (username > 16){
        alert('Password must be less than 16 characters');
       }
   }
   console.table({
    username:username,
    email:email,
    password:password,
   })
    

} )



// Event Listeners
