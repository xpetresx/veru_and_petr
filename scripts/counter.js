    // Set the date we're counting down to
    var countDownDate = new Date("Oct 17, 2020 11:00:00").getTime();

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
      var d_tag = " dní "
      var h_tag = " hodin "
      var m_tag = " minut "
      var s_tag = " vteřin "

      if (days <= 4 && days != 0) {
        d_tag = " dny "
      } 
      if (days == 1) {
        d_tag = " den "
      }

      if (hours <= 4 && hours != 0) {
        h_tag = " hodiny "
      }
      if (hours == 1) {
        h_tag = " hodina "
      }

      if (minutes <= 4 && minutes != 0) {
        m_tag = " minuty "
      }
      if (minutes == 1) {
        m_tag = " minuta "
      }

      if (seconds <= 4 && seconds != 0) {
        s_tag = " vteřiny "
      }
      if (seconds == 1) {
        s_tag = " vteřina "
      }

      document.getElementById("counter").innerHTML = days + d_tag + hours + h_tag
      + minutes + m_tag + seconds + s_tag;
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "MARRIED (hopefully)";
      }
    }, 1000);
