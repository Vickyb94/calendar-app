
//used the ready() method to ensure that the javascript is executed after loading the html file
$(document).ready(function () {
  //Added a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    console.log(this); //'this' is the element that invokes the event in the event handler.
    //getting the id attribute of the parent element
    var text = $(this).siblings(".plan").val()
    var time = $(this).parent().attr("id");

    //to store the plan in the local storage,
    localStorage.setItem(text, time);
  });
  //TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    
   //set function to get present time now
  function timeBlock() {
      var time = moment().hour();
    }
    $(".time-block").each(function() {
      var currentTime = parseInt($(this).attr("id"));
      console.log( currentTime, time)
      //created a for loop to loop over the time blocks
      //if time is less than currentTime, then it is in the past 
      if ( time < currentTime) {
        $(this).addClass("past");
      //if time is strictly equal to current time, then it is the present
    } else if ( time === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
  });
  

  //getting saved data from local storage; it helps to use id to save the data so it makes it easier to load
  $("#9 .plan").val(localStorage.getItem("9"));
  $("#10 .plan").val(localStorage.getItem("10"));
  $("#11 .plan").val(localStorage.getItem("11"));
  $("#12 .plan").val(localStorage.getItem("12"));
  $("#1 .plan").val(localStorage.getItem("1"));
  $("#2 .plan").val(localStorage.getItem("2"));
  $("#3 .plan").val(localStorage.getItem("3"));
  $("#4 .plan").val(localStorage.getItem("4"));
  $("#5 .plan").val(localStorage.getItem("5"));

  //display current date and time in the header of the page
  $("#currentDay").text(moment().format('dddd MMMM DD YYYY h:mm:ss a'));
});
