const myf = document.forms['my-first-form'];
let akan_name = "";

const daysOfWeekMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const daysOfWeekFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

myf.addEventListener('submit',(e)=>{
    e.preventDefault();

    const DD = Number(myf['day'].value);
    const MM = Number(myf['month'].value);
    const YY = Number(myf['year'].value) % 100;
    const CC = Math.ceil(Number(myf['year'].value)/100);
    const gender = myf['gender'].value;
   

    const day_of_the_week = Math.ceil(Math.abs(( ( (CC/4) - 2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7));
 
    console.log(day_of_the_week);


});
