let hourscontainer= document.querySelector('.hours')
let minutescontainer= document.querySelector('.minutes')
let secondscontainer= document.querySelector('.seconds')
let datecontainer= document.querySelector('.date-container')

const weekdays=[
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
]

const months=[
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
]

function formatTime(time){
    return time<10 ? "0"+ time :time;
}

function updateClock(){
    const today= new Date();
    let date= today.getDate();
    let day=weekdays[today.getDay()]
    let month=months[today.getMonth()]
  

    let hours= formatTime(today.getHours())
    let minutes= formatTime(today.getMinutes())
    let seconds= formatTime(today.getSeconds())
   

    hourscontainer.textContent= hours + ":"
    minutescontainer.textContent= minutes + ":"
    secondscontainer.textContent= seconds + ""
    datecontainer.innerHTML=`<p>${day}</p><p><span>${date}</span></p><p>${month}:${today.getFullYear()}</p><p></p>`
}

setInterval( updateClock ,1000)
