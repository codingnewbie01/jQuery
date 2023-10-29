// ON()---> use to add one or more events

$(document).ready(function(){

    // Single Event---->
    
    // $("#resume").on("click", function(){
        //     // console.log("Please upload ur resume");
        //     $(this).hide();
        // })

    // Multiple Events---->

    $("#resume").on({
        mouseenter:function(){
            $(this).hide();
        },

        mouseleave:function(){
            $(this).show();
        },

    });

})