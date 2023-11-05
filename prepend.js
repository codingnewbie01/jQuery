// prepand()---appends an element before the selected one but inside the same container 

$(document).ready(function(){
    $("[type='submit']").prepend('<input type="checkbox" name="receiveNotification" >Do you want to receive the updates regardings new jobs? <br><br><br>');
})