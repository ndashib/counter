let AddBtn = document.getElementById('add')
let resetBtn = document.getElementById('reset')
let decrimentBtn = document.getElementById('decrease')
let  display = document.getElementById('display')
let spelling = document.getElementById('word')
let number = '1'
let text = 'one'
const counterAdd = () =>{
  number++
  display.style.color = 'green'
if(number===1){
  text = 'one';
}else if(number===2){
  text = 'two'
}else if(number===3){
  text = 'three'
}else if(number===4){
  text = 'four'
}else if(number===5){
  text = 'five'
}else if(number===6){
  text = 'six'
}else if(number===7){
  text = 'seven'
}else if(number===8){
  text = 'eight'
}else if(number===9){
  text = 'nine'
}else if(number===10){
  text = 'ten'
}else if(number>10){
  number = 10
  text= 'stop'
}
else{
  text='stop'
}
display.innerHTML = number
spelling.innerHTML = text
}
display.innerHTML = number
spelling.innerHTML = text
const reset = ()=>{
  number = 0
  display.style.color = 'black'
  text = 'zero'
  spelling.innerHTML = text
  display.innerHTML = number
}
const decrement = ()=>{
  number--
  display.style.color = 'red'
  if(number<-10){
   number = -10 
  }
  spelling.innerHTML = ''
  display.innerHTML = number
}
