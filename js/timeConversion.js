function timeConversion(time) {
  var hours = Number(time.match(/^(\d+)/)[1]);
  var min = Number(time.match(/:(\d+)/)[1]);
  var sec = Number(time.match(/:(\d+)/)[1]);
  if (min < 10) min = "0" + min;
  if (hours < 12) {
    return hours + ":" + min + ":" + sec;
  } else {
    hours = hours - 12;
    hours = hours < 10 ? "0" + hours : hours;
    return hours + ":" + min + ":" + sec;
  }
}

console.log(timeConversion("07:05:45PM"));
