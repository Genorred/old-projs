let seconds = 0
let minutes = 0
let hours = 0
let days = 0
let months = 6

const checkingTimer = () => {
    if (seconds <= -1) {
         seconds = 59,
            minutes += -1
    }
    if (minutes <= -1) {
         minutes = 59,
            hours += -1
    }
    if (hours <= -1) {
         hours = 23,
            days += -1
    }
    if (days <= -1) {
         days = 29,
            months += -1
    }
}


const timer = () => { setTimeout(() => {
    if(months>=1){
        console.log(months, days, hours, minutes, seconds)
 seconds --
 checkingTimer()
 timer ()
    } else {
        clearTimeout(timer)
    } 
}, 1000);
}
timer()
