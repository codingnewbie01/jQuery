$(document).ready(function(){
    // alert("This page is suspecious!!!!!")
    $("#fname").focus(function(){
        // $(this).css("border", "none");
        $(this).css("border", "2px solid red");
        $(this).css("border-radius", "3px");
    });
    $("#fname").blur(function(){
        // $(this).css("border", "none");
        $(this).css("border", "");
        $(this).css("border-radius", "");
    });
});