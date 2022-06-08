const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const newDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = newDate.getFullYear();
let month = newDate.getMonth();
month = months[month];
const hours = newDate.getHours();
const mins = newDate.getMinutes();
let date = newDate.getDate();
let day = weekdays[newDate.getDay()];
giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${mins}am`;

const futuredate = newDate.getTime();


function getRemainingTime() {
    const today = new Date().getTime();
    const time = futuredate - today;
    const oneday = 24 * 60 * 60 * 1000;
    const onehour = 60 * 60 * 1000;
    const onemin = 60 * 1000;
    let days = time / oneday;
    days = Math.floor(days);
    let hours = (time % oneday) / onehour;
    hours = Math.floor(hours);
    let mins = (time % onehour) / onemin;
    mins = Math.floor(mins);
    let sec = Math.floor((time % onemin) / 1000);


    const values = [days, hours, mins, sec];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    })
    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class= "expired">sorry, giveaway has expired</h4>`
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();