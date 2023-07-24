console.log("Exercise 3 - Timer");
var counter =29
var sec = setInterval(function(){
    counter --
    let value = document.getElementById('second')
    value.textContent = counter
    if(counter<=0){
        clearInterval(sec);
    }
},1000);

var minus =document.getElementById('minus');
var add =document.getElementById('add');
var reset =document.getElementById('reset');


minus.addEventListener('click',function(){
    counter =counter-1;
})
add.addEventListener('click',function(){
    counter =counter+1;
})
reset.addEventListener('click',function(){
    counter =0;
})


