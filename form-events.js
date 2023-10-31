$(document).ready(function(){

// focus()----when input tag get focused

$("input").focus(function(){
    $(this).css("border", "2px solid green");
});

// blur()----when input tag lose focused

$("input").blur(function(){
    $(this).css("border", "");
});

// select()----when something gets selected from input tag

$("input").select(function(){
    $(this).css("letterSpacing", "2px");
});

// change()----applies on select tag only, when we change the option

$("#Education").change(function(){
    $(this).css("backgroundColor", "Pink")
})

// submit()-----when a form gets submitted
$("#userSignUp").submit(()=>{
    var u=$("#fname").val();
    alert(`Hi ${u}, your form has been submitted successfully`);
})
})