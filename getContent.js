$(document).ready(function(){
    var t=$("#title1").html();
    var t1=$("#title1").text();
    console.log(t);
    console.log(t1);
    
    $("#userSignUp").submit(function(){
        var f1=$("#fname").val();
        var f2=$("#lname").val();
        // console.log(v);
        // alert(f2);
        confirm(`Your full name is ${f1} ${f2}`)
    })
})