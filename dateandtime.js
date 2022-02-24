
         setInterval(()=>{
           const time = document.querySelector(".display #time");
           /*date*/
           var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000){
            year +=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    //Day End

           /*time*/
           let date = new Date();
           let hours = date.getHours();
           let minutes = date.getMinutes();
           let seconds = date.getSeconds();
           let day_night = "AM";
           if(hours > 12){
             day_night = "PM";
             hours = hours - 12;
           }
           if(seconds < 10){
             seconds = "0" + seconds;
           }
           if(minutes < 10){
             minutes = "0" + minutes;
           }
           if(hours < 10){
             hours = "0" + hours;
           }
           time.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " + hours + ":" + minutes + ":" + seconds + " "+ day_night;
         });
