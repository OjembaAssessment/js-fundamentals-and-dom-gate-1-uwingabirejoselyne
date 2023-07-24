console.log("Exercise 3 - Timer");
var counter =29
var sec = setInterval(function(){
    counter --
    let value = document.getElementById('second')
    value.textContent = counter
    console.log('value');
    if(counter<=0){
        clearInterval(sec);
    }
},1000);

var minus =document.getElementById('minus');
var add =document.getElementById('add');
var reset =document.getElementById('reset');




const value =document.getElementById('second')
const btns=document.querySelectorAll('#btn')
btns.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList
        if(styles.contains("minus")){
            counter--
        }
        else if(styles.contains("add")){
            counter ++
        }
        else{
            counter =0
        }
        if(counter>0){
            value.style.color ="red"
        }
        if(counter<0){
            value.style.color ="blue"
        }
        if(counter===0){
            value.style.color ="green"
        }
        value.textContent =counter
    })
})
