var todayEl = $("#currentDay");
var hourEl = $(".time-block");
var date = dayjs().format("dddd, MMMM Do");
var currentHour = dayjs().format("H");
var buttonEl = $(".btn");
var textEl = $(".description");

$(function () {
  // Added the current date to the header of the calendar
  todayEl.text(date);

  // Added function to compare current time to time block and add class for past, present or future
  hourEl.each(function (i) {
    if (hourEl.eq(i).data("hour") < currentHour) {
      hourEl.eq(i).addClass("past");
    } else if (hourEl.eq(i).data("hour") == currentHour) {
      hourEl.eq(i).addClass("present");
    } else {
      hourEl.eq(i).addClass("future");
    }
  });

  // Added event listener for each button that will store the text content of the textarea form with the ket name equal to the time block id hour-"i"
  buttonEl.click(function (event) {
    event.preventDefault();
    clickedId = $(this).parent().get(0).id;
    savedText = $(this).parent().children().eq(1).val();
    localStorage.setItem(clickedId, savedText);
  });

  // For each text area element get the stored key value of each id number and add it as the text value for each text area input
  textEl.each(function (i) {
    var index = i + 9;
    var text = localStorage.getItem("hour-" + index);
    $(this).val(text);
  });
});
