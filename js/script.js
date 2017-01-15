var theTotal = 0;
$('button').click(function(){
   theTotal = Number(theTotal) + Number($(this).val());
    $('#calculate').val(theTotal);        
});

$('#calculate').val(theTotal);