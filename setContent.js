$(document).ready(function(){

    var updateCount=0;
    $("#changeTitle").on("click", function(){

        // $("#title1").html("get<b>Hired</b>", function(e){
        //     console.log(e.target);
        // });

        // $("#title1").text("get<b>Hired</b>", function(e){
        //     console.log(e.target);
        // });


        if (updateCount<5) {

        let newTitle=prompt("Enter the New Title");
        
        if(newTitle.length !=0){
            $("#title1").text(newTitle);
            $("#fname").val(newTitle);

            updateCount += 1;
            console.log(updateCount, newTitle);
        }

        else {
            alert("Plz enter something");
        }
    }
        else{
            alert("Your have exceeded the limit of changing a title")
        }

    });
})