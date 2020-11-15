var lead = moment().format("dddd, MMMM Do YYYY, h:mm a"); 

// Current day and time display at the top of the page
$("#currentDay").html(lead);

console.log(lead)


//Saving  
$(document).ready(function () {

    $(".saveBtn").on("click", function (){

       var text =  $(this).siblings(".description").val();
       var time =  $(this).parent().attr("id");

        

        //Save in local storage
        localStorage.setItem(time, text);

    })

    function timeTrack() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("time")[1]);


            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");


            }else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            }else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

                
            }
        })
    }

    
  
   

    //Local Storage
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));



    timeTrack();
    
})