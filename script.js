//code checking the working buttons
var total = 0;
$('button').click(function(){
   theTotal = Number(total) + Number($(this).val());
    $('#calculate').val(total);        
});

$('#calculate').val(total);
