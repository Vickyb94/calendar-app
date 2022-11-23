
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
  //getting saved data from local storage; it helps to use id to save the data so it makes it easier to load
  //$("#9 .plan").val(localStorage.getItem("9"));
  //$("#10 .plan").val(localStorage.getItem("10"));
  //$("#11 .plan").val(localStorage.getItem("11"));
  //$("#12 .plan").val(localStorage.getItem("12"));
  //$("#1 .plan").val(localStorage.getItem("1"));
  //$("#2 .plan").val(localStorage.getItem("2"));
  //$("#3 .plan").val(localStorage.getItem("3"));
  //$("#4 .plan").val(localStorage.getItem("4"));
  //$("#5 .plan").val(localStorage.getItem("5"));

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
 
  //display current date and time in the header of the page
  $("#currentDay").text(moment().format('dddd MMMM DD YYYY h:mm:ss a'));
});
