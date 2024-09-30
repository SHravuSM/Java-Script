let dateElement = document.querySelector('p');

function updateTime() {

    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    let period = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;


    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    dateElement.innerText = `${year} : ${month} : ${day} : ${hour} : ${minute} : ${second} ${period}`;
}

setInterval(updateTime, 1000);

updateTime();
