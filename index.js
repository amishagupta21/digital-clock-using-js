const hourNode=document.querySelector("#hour")
const minuteNode=document.querySelector("#minute")
const secondNode=document.querySelector("#second")
const ampmNode=document.querySelector("#ampm")

function updateClock(){
 let hour=new Date().getHours()
 let minutes=new Date().getMinutes()
 let second=new Date().getSeconds()
 let ampm="AM"

 if(hour>12){
    hour=hour-12;
    ampm="PM"
 }
 hour =hour<10? "0"+ hour : hour
 minutes =minutes<10? "0"+ minutes : minutes
 second =second<10? "0"+ second : second

 hourNode.innerText=hour
 minuteNode.innerText=minutes
 secondNode.innerText=second
 ampmNode.innerText=ampm
 setTimeout(()=>{
    updateClock()
 },1000)
}
updateClock()