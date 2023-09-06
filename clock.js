let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let day=document.getElementById('day');
let date1=document.getElementById('date');
function displayTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let y=date.getFullYear();
    let day1=date.getDay();
    let hRotaion=30*hh+mm/2;
    let mRotaion=6*mm;
    let sRotaion=6*ss;
    hr.style.transform=`rotate(${hRotaion}deg)`;
    min.style.transform=`rotate(${mRotaion}deg)`;
    sec.style.transform=`rotate(${sRotaion}deg)`;
    var a;
console.log(day1);
    if(day1==1){
        a="Monday";
    }
    else if(day1==2){
        a="Tuesday";
    }
    else if(day1==3){
        a="Wednesday";
    }
    else if(day1==4){
        a="Thursday";
    }
    else if(day1==5){
        a="Friday";
    }
    else if(day1==6){
        a="Saturday";
    }
    else if(day1==0){
        a="Sonday";
    }
    day.innerHTML=`Today is ${a} and Year is ${y}`;
}
setInterval(displayTime,1000);
// day.innerHTML=day1;