// appendTo()---it does the same as append() do. but it has different syntax

/*
Syntax:
        
*/


$(document).ready(function(){
    $("[type='submit']").appendTo('<input type="checkbox" name="receiveNotification" >Do you want to receive the updates regardings new jobs?');
})