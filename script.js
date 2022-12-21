let digitalClock12hr = () => {
  setInterval(function () {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let year = time.getFullYear();

    let hour = 0;
    if (hours > 12) {
      switch (hours) {
        case 13: hour = 1;
          break;
        case 14: hour = 2;
          break;
        case 15: hour = 3;
          break;
        case 16: hour = 4;
          break;
        case 17: hour = 5;
          break;
        case 18: hour = 6;
          break;
        case 19: hour = 7;
          break;
        case 20: hour = 8;
          break;
        case 21: hour = 9;
          break;
        case 22: hour = 10;
          break;
        case 23: hour = 11;
          break;
        case 24: hour = 12;
          break;
      }
    } else if (hours == 0) {
      hour = 12;
    } else {
      hour = hours;
    }

    minutes<10 ? (minutes = "0" + minutes) : (minutes = minutes)
    seconds<10 ? (seconds = "0" + seconds) : (seconds = seconds)

    let amPm = hours<12 ? "AM" : "PM"
    let monthsName = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
    let monthName = monthsName[time.getMonth()]
    let weeksName = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let weekName = weeksName[time.getDay()]

    let clk_elem = document.getElementById("clock");
    clk_elem.innerHTML = `<b><font size="7">${hour}:${minutes}:${seconds} ${amPm}</font><br><font size="4">${weekName} ${monthName} ${year} </font></b><br>(12 hour format)`;
  },1000);
};

digitalClock12hr()
