'use strict';

const dateholder = document.querySelector('.clock :first-child');
const clockholder = document.querySelector('.clock :last-child');
const dayList = ['Sun', 'Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function clockRefresh() {
  const currentTime = new Date;
  const currentYear = currentTime.getFullYear();
  const currentMonth = String(currentTime.getMonth()+1);
  const currentDate = String(currentTime.getDate());
  const currentHour = String(currentTime.getHours());
  const currentMinute = String(currentTime.getMinutes());
  const currentSecond = String(currentTime.getSeconds());
  const currentDay = dayList[currentTime.getDay()];

  dateholder.innerText = `${currentYear}. ${currentMonth.padStart(2,0)}. ${currentDate.padStart(2,0)}. ${currentDay}`;
  clockholder.innerText = `${currentHour.padStart(2,0)} : ${currentMinute.padStart(2,0)} : ${currentSecond.padStart(2,0)}`;
}

clockRefresh();
setInterval(clockRefresh, 1000);