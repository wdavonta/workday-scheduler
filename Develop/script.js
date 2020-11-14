




var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");


    var hourCheck =function() {
        var currentHour = moment().hour()

        for (var i=8; i<18; i++) {
            var taskInput = $("task-"+i)
            if(currentHour>i){
                $(taskInput).addClass("past");
            } else if (currentHour === i) {
                $(taskInput).addClass("past");
            }else{
                $(taskInput).addClass("past")
            }
        }
    }
    
$(".taskBin").on("click", "p", function(){

    var text =$(this)
        .text()
        .trim();
    
    var textInput =$("textarea>")
        .addClass("form-control")
        .val(text);

        $(this).replaceWIth(textInput);
        textInput.trigger("focus");

});



$("#currentDay").text(today);




//Click for task update
$(".taskIput").on("click", "p", function(){
    // console.log("<p> was clicked");
    var text =$(this)
      .text()
      .trim();
    var textInput =$("<textarea>")
      .addClass("form-control")
      .val(text);
  
    $(this).replaceWith(textInput);
     textInput.trigger("focus");
  });

    //Task updated
$(".taskInput").on("blur", "textarea", function() {
    //get the textareas; current value/text
      var text = $(this)
        .val()
        .trim();
      // console.log(text)
  
      //recreate p element
      var taskP = $("<p>")
        .addClass("taskItem")
        .text(text);
  
      // replace textarea with p element
      $(this).replaceWith(taskP);
    });    


