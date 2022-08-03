
document.getElementById(`slider`).value=2
// начальные настройки поля 
let a= document.getElementById(`value`).innerHTML=document.getElementById(`slider`).value
for (let i=0; i<a*2; i++){
       let newDiv =document.createElement('div');
       newDiv.className =`new`;
       document.getElementById(`field`).append(newDiv);
           };

//настройки поля    
document.getElementById(`slider`).addEventListener(`change`,function(){
       let a = document.getElementById(`value`).innerHTML=this.value
       while (document.getElementById(`field`).firstChild){document.getElementById(`field`).removeChild(document.getElementById(`field`).firstChild)}
       document.getElementById(`field`).setAttribute('style', `grid-template-columns: repeat(${a}, 2fr); grid-template-rows: repeat(${a}, 2fr);`);
       for (let i=0; i<a*a; i++){
              let newDiv =document.createElement('div');
       newDiv.className =`new`;
       document.getElementById(`field`).append(newDiv);};
// фон кнопки
let btn=document.querySelectorAll(`button`);
btn.forEach(button =>{button.style.backgroundColor=`white`;} )
selectClr.style.backgroundColor = 'white';
});

// Выбор цвета
let selectClr=document.getElementById(`color`)
selectClr.onclick=function(){ 
       selectClr.style.backgroundColor = 'gray';
       document.getElementById(`black`).style.backgroundColor = 'white';
       document.getElementById(`RGB`).style.backgroundColor = 'white';

    let b =document.querySelectorAll(`.new`);
    b.forEach(div => {
       div.addEventListener(`mouseover`,function(){
              color= selectClr.value;      
                     div.style.backgroundColor = color;
              })  
    });
}
// черный
document.getElementById(`black`).onclick=function(){
       document.getElementById(`black`).style.backgroundColor = 'gray';
       selectClr.style.backgroundColor = 'white';
       document.getElementById(`RGB`).style.backgroundColor = 'white';
    let b =document.querySelectorAll(`.new`);
    b.forEach(div => {
       div.addEventListener(`mouseover`,function(){
                     div.style.backgroundColor = 'black';
              })  
    });
}
    
// кнопка рандом
function getRandomColor(){
       let letters = '0123456789ABCDEF';
       let color = '#';
       for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
   }
 
document.getElementById(`RGB`).onclick=function(){
       document.getElementById(`RGB`).style.backgroundColor = 'gray';
       document.getElementById(`black`).style.backgroundColor = 'white';
       selectClr.style.backgroundColor = 'white';
       let b =document.querySelectorAll(`.new`);
    b.forEach(div => {
       div.addEventListener(`mouseover`,function(){
                    let abc =div.style.backgroundColor = getRandomColor();
                    console.log(abc);
              })  
    });
}
   
// кнопка очистки
document.getElementById(`clear`).onclick=function(){
    let b =document.querySelectorAll(`.new`);
    b.forEach(div => {
       div.style.backgroundColor=`white`
    });
}


