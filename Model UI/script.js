'use strict';


const btnOne = document.getElementById('btn1');

const btnTwo=document.getElementById('btn2');

const btnThree=document.getElementById('btn3');

const modalWindow =document.getElementById('window');

const btnClose = document.getElementById('btn-close');


// select elements



// global variable


// functions

const init = function(){
    modalWindow.classList.add('close');
    
};
init();


// Event Listeners


btnOne.addEventListener('click',()=> {
    modalWindow.classList.remove('close');
    modalWindow.classList.add('open');
});

btnTwo.addEventListener('click',()=> {
    modalWindow.classList.remove('close');
    modalWindow.classList.add('open');
});

btnThree.addEventListener('click',()=> {
    modalWindow.classList.remove('close');
    modalWindow.classList.add('open');
});

btnClose.addEventListener('click',()=> {
    modalWindow.classList.remove('open');
    modalWindow.classList.add('close');
});


// initial settings