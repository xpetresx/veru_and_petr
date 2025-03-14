    // Set the date we're counting down to
    var countDownDate = new Date("Jun 26, 2021 10:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      //format the output
      document.getElementById("counter").innerHTML = days + " D<br>" + hours + " H<br>"
      + minutes + " M<br>" + seconds + " S<br>";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "MARRIED (hopefully)";
      }
    }, 1000);
