function food(name,price,cookTime,submeal){
  this.name = name;
  this.price = price;
  this.cookTime = cookTime;
  this.submeal = submeal;
}

var steak = new food("steak",150,2500);
var pork = new food("pork",125,2000);
var fish = new food("fish",100,1200);

function order(steakAmount,arr1,porkAmount,arr2,fishAmount,arr3){
  if((steakAmount < 0) || (porkAmount < 0) || (fishAmount < 0)){
    console.log("You order for a wrong amount, please order again");
    return false;
  }
  if((steakAmount === 0) && (porkAmount === 0) && (fishAmount === 0)){
    console.log("Thanks for your considering");
    return true;
  }
  var cost = steak.price * steakAmount + pork.price * porkAmount + fish.price * fishAmount;
  console.log("Your cost is " + cost);
  if(steakAmount > 0){
    setTimeout(waiting,steak.cookTime,steak.name);
    setTimeout(waiting,10,arr1);
  }
  if(porkAmount > 0){
    setTimeout(waiting,10,arr2);
    setTimeout(waiting,pork.cookTime,pork.name);
  }
  if(fishAmount > 0){
    setTimeout(waiting,10,arr3);
    setTimeout(waiting,fish.cookTime,fish.name);
  }
  /*if(steakAmount > 0){
    var tmp = prompt("Do you want bread,tea or soup?");
    setTimeout(submealWaiting,10,arr);
    setTimeout(mealWaiting,steak.cookTime,steak.name);
  }
  if(porkAmount > 0){
    var tmp = prompt("Do you want bread,tea or soup?");
    setTimeout(submealWaiting,10,tmp);
    setTimeout(mealWaiting,pork.cookTime,pork.name);
  } 
  if(fishAmount > 0){
    var tmp = prompt("Do you want bread,tea or soup?");
    setTimeout(submealWaiting,10,tmp);
    setTimeout(mealWaiting,fish.cookTime,fish.name);
  }*/
}

function waiting(str){
    console.log("Your " + str + " coming");
}
order(-1,["tea"],2,["bread","soup"],0);