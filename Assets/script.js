var todayEl = $("#currentDay");
var hourEl = $(".time-block");
var date = dayjs().format("dddd, MMMM Do");
var currentHour = dayjs().format("H");
var buttonEl = $(".btn");
console.log(buttonEl.eq(0).parent().get(0).id);

$(function () {
  // Added the current date to the header of the calendar
  todayEl.text(date);

  // Added function to compare current time to time block and add class for past, present or future
  hourEl.each(function (i) {
    console.log(hourEl.eq(i).data("hour"));
    if (hourEl.eq(i).data("hour") < currentHour) {
      hourEl.eq(i).addClass("past");
    } else if (hourEl.eq(i).data("hour") == currentHour) {
      hourEl.eq(i).addClass("present");
    } else {
      hourEl.eq(i).addClass("future");
    }
  });

  buttonEl.click(function () {
    clickedId = $(this).parent().get(0).id;
    // savedText =
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
