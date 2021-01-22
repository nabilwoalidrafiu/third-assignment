// https://github.com/nabilwoalidrafiu/third-assignment


//kilometerToMeter

function kilometerToMeter(kilometer) {
    if(kilometer>=0){
        meter= kilometer*1000;
    }
    else{
       return "Must use positive number.";
    }
    return meter;
}
var result1= kilometerToMeter(6);
console.log(result1);


// budgetCalcultator
function budgetCalculator(watch, mobile, laptop) {
    if ( (watch >= 0 && Number.isInteger(watch)) && (mobile >= 0 && Number.isInteger(mobile) ) && (laptop >= 0  && Number.isInteger(laptop)) ){
        var totalWatch = watch * 50;
        var totalMobile = mobile *100;
        var totalLaptop = laptop * 500;
        totalBudget = totalWatch + totalMobile + totalLaptop;
    
    }
    else{
        return "Must use posiive integer.";
    }
    return totalBudget;
}
var budget = budgetCalculator(520, 50, 50) 
console.log(budget);


// hotelCost
function hotelCost(days) {
    var cost = 0;
    if(days>=0 && Number.isInteger(days)){
        if (days<=10) {
            cost = days * 100;
        }    
        else if (days<=20) {
            var firstPart = 10 * 100;
            var remaining = days - 10;
            var secondPart = remaining * 80;
            cost = firstPart + secondPart;
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = days - 20;
            var thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }
        
    }
    else{
        return "Must use positive integer."
    }
    return cost;
}
var cost = hotelCost(25);
console.log(cost);

// megaFriend
function megaFriend(friends) {
    var character = 0;
    var longest;

   for (var i = 0; i < friends.length; i++) {
     if (friends[i].length > character) {
     var character = friends[i].length;
     longest = friends[i];
   }
  }
  return longest;
}
var array = ['Arman', 'Rahim', 'Raihan', 'Jhankar', 'Mahbub', 'Rabindranath', 'Kabilandranath', 'Ashrafuzzaman', 'Ashfukulhaktanim', 'Ashfuqulhaqtanim'];
var result = megaFriend(array);
console.log(result);

