// before()---appends an element before & outside the selected container/Element 
$(document).ready(function(){
    $("[type='submit']").before('<input type="checkbox" name="receiveNotification" >Do you want to receive the updates regardings new jobs?');
})