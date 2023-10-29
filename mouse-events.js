$(document).ready(function(){
    // Click---> Single Left Click
    // console.log("Document is ready");
    $("#lname").click(function(){
        // $("#lname").css("outline","none");
        $("#lname").hide();
    });

    // dblclick---> Double Left Click
    
    $("#male").dblclick(function(){
        // $("#lname").css("outline","none");
        $(this).hide();
    });

    // contextmenu---> Single right Click
    
    $("#fmale").contextmenu(function(){
        // $("#lname").css("outline","none");
        $(this).hide();
    });

    // mouseenter---> Mouse Enters
    
    $("#message").mouseenter(function(){
        // alert("Mouse enter in message Section")
        // $(this).css("background-color", "green");
    });
    
    // mouseleave---> Mouse leaves
    
    $("#message").mouseleave(function(){
        // alert("Mouse leaving the message Section")
        // $(this).css("background-color", "red");
        
    });

    // mousedown---> Mouse's left, middle, right button pressed
    
    $("#pnts").mousedown(function(){
        // console.log("Mouse button clicked");
        // alert("Mouse button clicked")
        // $(this).css("background-color", "red");
    });
    
    // mouseup---> Mouse's left, middle, right button released after clicking
    
    $("#pnts").mousedown(function(){
        // alert("Mouse button released")
        // console.log("Mouse button released");
        // $(this).css("background-color", "red");
    });

    // hover()----> combination of mouseenter() & mouseleave() and takes functions as arguments first one for mouseenter() and other one is mouseleave()

    $("[type='submit']").hover(()=>{
        // console.log("Hi ARVIND");
        alert("HI")
    },
    ()=>{
        // console.log('Bye');
        alert("BYE")
    });
})