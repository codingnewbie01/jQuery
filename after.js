// after()---appends an element after & outside the selected container/Element 
$(document).ready(function(){
    $("[type='submit']").after('<input type="checkbox" name="receiveNotification" >Do you want to receive the updates regardings new jobs?');
})