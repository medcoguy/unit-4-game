$( document ).ready(function(){
  let Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);

  let num1= Math.floor(Math.random()*11+1)
  let num2= Math.floor(Math.random()*11+1)
  let num3= Math.floor(Math.random()*11+1)
  let num4= Math.floor(Math.random()*11+1)
 
  let totalNumber= 0; 
  let wins= 0;
  let losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      totalNumber= 0;
      $('#totalNumber').text(totalNumber);
      } 

function yay(){
alert("Juicy insects have gotten caught in your web. You win!");
  wins++; 
  $('#wins').text(wins);
}
function loser(){
alert ("You have beem eaten by a bird. You lose!");
  losses++;
  $('#losses').text(losses);
  reset()
}
  $('#spider1').on ('click', function(){
    totalNumber = totalNumber + num1;
    console.log("New totalNumber= " + totalNumber);
    $('#totalNumber').text(totalNumber); 
        if (totalNumber == Random){
          yay();
        }
        else if ( totalNumber > Random){
          loser();
        }   
  })  
  $('#spider2').on ('click', function(){
    totalNumber = totalNumber + num2;
    console.log("New totalNumber= " + totalNumber);
    $('#totalNumber').text(totalNumber); 
        if (totalNumber == Random){
          yay();
        }
        else if ( totalNumber > Random){
          loser();
        } 
  })  
  $('#spider3').on ('click', function(){
    totalNumber = totalNumber + num3;
    console.log("New totalNumber= " + totalNumber);
    $('#totalNumber').text(totalNumber);
          if (totalNumber == Random){
          yay();
        }
        else if ( totalNumber > Random){
          loser();
        } 
  })  
  $('#spider4').on ('click', function(){
    totalNumber = totalNumber + num4;
    console.log("New totalNumber= " + totalNumber);
    $('#totalNumber').text(totalNumber); 
      
          if (totalNumber == Random){
          yay();
        }
        else if ( totalNumber > Random){
          loser();
        }
  });   
}); 