
//used the ready() method to ensure that the javascript is executed after loading the html file
$(document).ready(function () {
  //Added a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    console.log(this); //'this' is the element that invokes the event in the event handler.
    //getting the id attribute of the parent element
    var text = $(this).siblings(".plan").val()
    var time = $(this).parent().attr("id");

    //to store the description in the local storage,
    localStorage.setItem(text, time);

  });
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
