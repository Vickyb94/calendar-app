

//used the ready() method to ensure that the javascript is executed after loading the html file
$(document).ready(function () {
   var saveBtn = $(".saveBtn");
   //Added a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
      console.log(this); //'this' is the element that invokes the event in the event handler.
      //created var plan and time to obtain storage values and to store the plan in the local storage"
      var plan = $(this).siblings(".plan").val();
      var time = $(this).parent().attr("id");

      //use local.storage(getitem) to retrieve saved plans from local storage
      localStorage.setItem(time, plan);
  })
  //  //getting saved data from local storage; it helps to use id to save the data so it makes it easier to load
      $("#9 .plan").val(localStorage.getItem("9"));
      $("#10 .plan").val(localStorage.getItem("10"));
      $("#11 .plan").val(localStorage.getItem("11"));
      $("#12 .plan").val(localStorage.getItem("12"));
      $("#1 .plan").val(localStorage.getItem("1"));
      $("#2 .plan").val(localStorage.getItem("2"));
      $("#3 .plan").val(localStorage.getItem("3"));
      $("#4 .plan").val(localStorage.getItem("4"));
      $("#5 .plan").val(localStorage.getItem("5"));


 //created a function to give current time when called
  function timeBlocker() {
      var timeNow = moment().hour();
      // created a for loop to set conditions for past, present, future time
      $(".time-block").each(function () {
          var hour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( hour, timeNow)

          //sets condition for output when hour is measured against timeNow
          if (hour < timeNow) {
              $(this).addClass("past");
          }

          else if ( hour === timeNow) {
              $(this).addClass("present");
          }
          
          else {
              $(this).addClass("future");
          }
      })
  }

   //display current date and time in the header of the page
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

 timeBlocker();
});