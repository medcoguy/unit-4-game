  
//set up letialbe
  let randomNum = "";
  let firstNum = "";
  let secondNum = "";
  let thirdNum = "";
  let fourthNum = "";
  let totalSum = "";
  let wins = "";
  let losses = "";
     messages = {
                win: "Juicy insects get stuck in your web. You Win!",
                lose: "You have beem eaten by a bird. You lose!",
                };

    $(document).ready(function() {

      // Create random number between 19 to 120 on clicking start-button add content to the randomNumber div.
      // ...
      // debugger
         $("#start-button").on("click", function(){
         
                 let random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;  
                 randomNum = random;
                 console.log(totalSum);
                 totalSum = 0;
                  $("#output").text("");
                  $("#total-number").text(totalSum);
                  wins = 0;
                  losses = 0;
                 console.log("sum: "+ totalSum);
                 $(".image").on("click");

                
                // start-button add content to the randomNumber div.
                 $("#randomNumber").text(randomNum);
                 $("#wins").text(wins);
                 $("#losses").text(losses);
                 // Create random number between 1 to 12 on clicking 
                // start-button add content to the randomNumber div.
                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 secondNum = random;          
                 $("#second-number").text(secondNum);
                // Create random number between 1 to 12 on clicking 
                // start-button add content to the randomNumber div.
                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 firstNum = random;          
                 $("#first-number").text(firstNum);
                // Create random number between 1 to 12 on clicking 
                // start-button add content to the randomNumber div.
                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 thirdNum = random;          
                 $("#third-number").text(thirdNum);
                // Create random number between 1 to 12 on clicking 
                // start-button add content to the randomNumber div.
                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 fourthNum = random;          
                 $("#fourth-number").text(fourthNum);
                 return firstNum;
                 return secondNum;
                 return thirdNum;
                 return fourthNum;
                 return random;

      });
         //refresh the random number, don't refresh scores
         $("#random-button").on("click", function(){
         
                 let random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;  
                 randomNum = random;
                 console.log(totalSum);
                 totalSum = 0; 
                 $("#output").text("");
                  $("#total-number").text(totalSum);
                  console.log("sum: "+ totalSum);
                  //$(".image").on("click");


                 $("#randomNumber").text(randomNum);
                 $("#wins").text(wins);
                 $("#losses").text(losses);
                 
                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 secondNum = random;          
                 $("#second-number").text(secondNum);

                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 firstNum = random;          
                 $("#first-number").text(firstNum);

                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 thirdNum = random;          
                 $("#third-number").text(thirdNum);

                 let random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
                 fourthNum = random;          
                 $("#fourth-number").text(fourthNum);

                 return firstNum;
                 return secondNum;
                 return thirdNum;
                 return fourthNum;
                 return random;

      });      
            //Add the all the crystal numbers based on image click        
            $("#spider1").on("click", function(){
                
               
                    firstNum += Number($(this).val());
                    totalSum = Number(totalSum) + Number(firstNum);
                    console.log(firstNum);
                    console.log(totalSum);
                    $("#total-number").text(totalSum);
                console.log("random: "+ randomNum);
                console.log("sum: "+ totalSum);
              //if total sum is equal to random num - add win count and display win message
             if (totalSum === randomNum) {
                wins++
                console.log("wins:" + wins);
                $("#wins").text(wins);
                output.innerHTML = messages.win;
                output.classList.add('win');
                alert("You win - Click on Refresh or Restart button");
                
              }
              //if total sum is greater than random num - add lost count and display lost message
              else if (totalSum > randomNum) {
                losses++
                console.log("loss:" + losses);
                $("#losses").text(losses);
                output.innerHTML = messages.lose;
                output.classList.add('lose');
                alert("You lost - Click on Refresh or Restart button");
                } 
                return totalSum;   
             });

             $("#spider2").on("click", function(){        
                    secondNum += Number($(this).val());
                    totalSum = Number(totalSum) + Number(secondNum);
                    console.log(secondNum);
                    console.log(totalSum);
                    $("#total-number").text(totalSum);
              if (totalSum === randomNum) {
                wins++
                console.log("wins:" + wins);
                $("#wins").text(wins);
                output.innerHTML = messages.win;
                output.classList.add('win');
                alert("You win - Click on Refresh or Restart button");
              }
              else if (totalSum > randomNum) {
                losses++
                console.log("loss:" + losses);
                $("#losses").text(losses);
                output.innerHTML = messages.lose;
                output.classList.add('lose');
                alert("You lost - Click on Refresh or Restart button");
                } 
                return totalSum;
             });
             $("#spider3").on("click", function(){
                    thirdNum += Number($(this).val());
                    totalSum = Number(totalSum) + Number(thirdNum);
                    console.log(thirdNum);
                    console.log(totalSum);
                    $("#total-number").text(totalSum);
                if (totalSum === randomNum) {
                  wins++
                  console.log("wins:" + wins);
                  $("#wins").text(wins);
                  output.innerHTML = messages.win;
                output.classList.add('win');
                alert("You win - Click on Refresh or Restart button");
              }
              else if (totalSum > randomNum) {
                  losses++
                  console.log("loss:" + losses);
                  $("#losses").text(losses);
                  output.innerHTML = messages.lose;
                output.classList.add('lose');
                alert("You lost - Click on Refresh or Restart button");
                  } 
                  return totalSum; 
             });
             $("#spider4").on("click", function(){
                    fourthNum += Number($(this).val());
                    totalSum = Number(totalSum) + Number(fourthNum);
                    console.log(fourthNum);
                    console.log(totalSum);
                    $("#total-number").text(totalSum);
                if (totalSum === randomNum) {
                wins++
                console.log("wins:" + wins);
                $("#wins").text(wins);
                output.innerHTML = messages.win;
                output.classList.add('win');
                alert("You win - Click on Refresh or Restart button");
              }
              else if (totalSum > randomNum) {
                losses++
                console.log("loss:" + losses);
                $("#losses").text(losses);
                output.innerHTML = messages.lose;
                output.classList.add('lose');
                alert("You lost - Click on Refresh or Restart button");
                } 
                return totalSum;
             }); 
             
    });

  
