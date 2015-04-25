$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $(""+toAdd+"<br>").appendTo(".list-group-item");
    });
});