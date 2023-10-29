$(document).ready(function(){
    console.log("Document is ready...Start writing your jquery");

    $("#fname").on({
        keydown:function(e){
            console.log(e.keyCode, " Key down");
        },

        keyup:function(e){
            console.log(e.keyCode, " Key released");
        },

        keypress:function(e){
            console.log(e.key," Key pressed");
            console.log(e.keyCode," Key pressed");
        }
    });
})