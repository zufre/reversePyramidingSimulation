function tradeOutcome() {
  if (Math.random() < 0.5 ){
    return "loss";
  }else{
    return "win";
  }
}
var fullRun =0;
var winners =0; var losers=0;
var count=0;
var capital = 33000;
var originalTradeSize = capital/33;
var tradeSize = originalTradeSize;
while (capital > 0 && losers <= 33 && capital <=55000 && capital >= 22000){
       if (tradeOutcome() == "win") {
         winners+=1;
         count+=1;
         capital += tradeSize;
         console.log("win-----------------------------");
         console.log(capital);
         if(count<3){
            
           tradeSize *= 2;
           
         }
        
         
         
       }else {losers+=1;
         capital -= tradeSize;
         tradeSize = originalTradeSize;
         count= 0;
         console.log("loss");
         console.log(capital);
       }
 
  
  
 }console.log(winners, losers);
