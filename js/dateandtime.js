function startTime(){
var dt = new Date();
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var days = weekday[dt.getDay()];

document.getElementById("datetime").innerHTML = 
			days+","+" "+ 
			(("0"+dt.getDate()).slice(-2)) +"-"+
			 (("0"+(dt.getMonth()+1)).slice(-2)) +"-"+
			 (dt.getFullYear()) +" "+ 
			 (("0"+dt.getHours()).slice(-2)) +":"+ 
			 (("0"+dt.getMinutes()).slice(-2)) +":"+ 
			 (("0"+dt.getSeconds()).slice(-2));

var t = setInterval(startTime, 1000);
}