// replaceWith()---replaces the complete DOM element with another HTML or DOM element

$(document).ready(()=>{
    $("#changeTitle").click(()=>{
        $("#title1").replaceWith("<h1>New Title</h1>");
    })
})