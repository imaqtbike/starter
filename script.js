"use strict"
let secrectNumber = Math.trunc(Math.random() * 20 ) +1 
document.querySelector('.number').textContent = secrectNumber;
let guess = Number(document.querySelector('.guess').value)
