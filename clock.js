function Clock(){
  update();
  window.setInterval("update()", 1);
}
function update(){
      var now = new Date();
      var dname = now.getDay(),
          month = now.getMonth(),
          date = now.getDate(),
          year = now.getFullYear(),
          hour = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          timming = "AM";
		  
          if(hour >= 12){
            timming = "PM";
          }
          if(hour == 0){
            hour = 12;
          }
          if(hour > 12){
            hour = hour - 12;
          }

          Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
          }

          var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
          var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
          var values = [week[dname], months[month], date.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), timming];
          for(var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

   
   
