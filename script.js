let presentDate = dayjs(); 
let displayDate = $("#currentDay");
displayDate.text(presentDate.format("MMM D, YYYY")); 



$(document).ready(function () {
  let saveButtons = $(".saveBtn");
 
  saveButtons.on("click", function (event) {
  
    let saveButton = $(this);
  
    let timeBlock = saveButton.closest(".time-block");
  
    let id = timeBlock.attr("id");
    
    let description = timeBlock.find(".description").val();
    // Save event in local storage
    localStorage.setItem(id, JSON.stringify(description));
  });

  
  $('.time-block').each(function() {
    let id = $(this).attr("id");
    let description = localStorage.getItem(id);
    if (description) {
      $(this).find('.description').val(JSON.parse(description));
    }
  });


// Setting the classes to past, present and future
  function trackTime() {
    let currentHour = new Date().getHours();
    let timeBlocks = $(".time-block");
   

    timeBlocks.each(function () {
      let time = $(this).attr("id").split("hour")[1];
      if (currentHour == time) {
        $(this).addClass("present");
      } else if (currentHour < time) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > time) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  }
  trackTime();
});
