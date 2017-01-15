   // global declaring of the coins
   var quarter = $('#quarter').val();
   var nickel = $('#nickel').val();
   var dime = $('#dime').val();
   var penny = $('#penny').val();

   // onclick fsunction for caclculate
$('#calculate').click(function(){
   var value = $('#input').val();
    //condition if the value is less than 25
  	if(value<quarter){
  		
  		//gives number of dimes
        var x = value/dime;
        //gives the decimal value 
        var y=Math.floor(value/dime);
        //gives the float value
        var z=value/dime-Math.floor(value/dime);
        //rounding the float will render the nickel and penny
        var w= Math.round(z*10);
        if(x!=0){
          var result=document.getElementById("demo");
          result.innerHTML = 'Required coins is '+ y +' dime ';
          // $('#dime').notify(y);
          if(w!=0){
          	if(w==nickel){
              result.append(1 +' nickel');
              // $('#nickel').notify(1);
          	}
          	if(w>nickel){
              var res = w-nickel; 
      	      result.append('1 nickel and'+ res +' pennies');
      	      // $('#nickel').notify(1);
      	      // $('#penny').notify(res);
          	}
            if(w<nickel){
            result.append(w+' pennies');
            // $('#penny').notify(w);
      }
          }
        }
     
  	} 


    //condition if value is greater than 25
  else if(value>=quarter){
    //give the number of quaters
    var x =Math.floor(value/quarter);
    //float value after calculating the quaters
    var z=value/quarter-Math.floor(value/quarter);
    var main=Math.round((z*100)/4);
    var dime1=Math.floor(main/10);
 
    var check=main/10-Math.floor(main/10);
 
    var last=Math.round((check*10));

    var y=value%quarter;
    
    if(x!=0){
      var result=document.getElementById("demo");
      result.innerHTML = 'Required coins is '+ x +' quarter ';
      // $('#quarter').notify(x);
      if(z!=0){
        result.append(dime1 +' dimes');
        // $('#dime').notify(dime1);
      }
      if(last==nickel){
         result.append('1 nickel');
         // $('#nickel').notify(1);
      }
      if(last>nickel){
      	var res = last-nickel; 
      	result.append('1 nickel and'+ res +' pennies');
      	// $('#nickel').notify(1);
      	// $('#penny').notify(res);
      }
      if(last<nickel){
         result.append(last +' pennies');
         // $('#penny').notify(last);
      }
    }
    
}
});