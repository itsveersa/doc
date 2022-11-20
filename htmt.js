var b1 = document.getElementById('bt1')
var b2 = document.getElementById('bt2')
var b3 = document.getElementById('bt3')
var b4 = document.getElementById('bt4')
var b5 = document.getElementById('bt5')
var b6 = document.getElementById('bt6')
var b7 = document.getElementById('bt7')
var b8 = document.getElementById('bt8')
var b9 = document.getElementById('bt9')

var state = true;
 

var sel = document.getElementById('cont')

b1.addEventListener('click',() => {
    b1.innerHTML = state? 'X':'O';
  state = !state
  console.log(state)
})
b2.addEventListener('click',() => {
    b2.innerHTML = state? 'X':'O';
    state = !state
    
})
b3.addEventListener('click',() => {
    b3.innerHTML = state? 'X':'O';
    state = !state
})
b4.addEventListener('click',() => {
    b4.innerHTML = state? 'X':'O';
    state = !state
})
b5.addEventListener('click',() => {
    b5.innerHTML = state? 'X':'O';
    state = !state
})
b6.addEventListener('click',() => {
    b6.innerHTML = state? 'X':'O';
    state = !state
})
b7.addEventListener('click',() => {
    b7.innerHTML = state? 'X':'O';
    state = !state
})
b8.addEventListener('click',() => {
    b8.innerHTML = state? 'X':'O'
    state = !state
})
b9.addEventListener('click',() => {
    b9.innerHTML = state? 'X':'O';
    state = !state  
})
 