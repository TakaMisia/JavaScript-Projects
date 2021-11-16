// my holiday will start 
var countDownDate = new Date("Dec 24, 2021 18:00:00").getTime();

// Update  every 1s
var x = setInterval(function() {

  //  currnt date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  //  calculations days,h,min and sec
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // result 
  document.getElementById("results").innerHTML = days + "Days " + hours + "h "
  + minutes + "min " + seconds + "sec";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Enjoy your holiday!";
  }
}, 1000);
