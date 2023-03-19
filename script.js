const myForm = document.querySelector('#myForm');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');



myForm.submit((e)=>{
   


    if(isNaN(day) || isNaN(month) || isNaN(year)){
        alert("Day, Month or Year must be a number.")
    }
})