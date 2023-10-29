// Code your solutions in this file

const { createItemFromDescriptor } = require("@babel/core/lib/config/item");

// to setup for loop
// for ([initialization]; [condition]; [iteration]) {
    // [loop body]
// }

// use for loop when you know how many times you want the
// loop to run 

for (let age = 30; age < 40; age++ ) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}
// age++ increments age by 1 everytime it goes through the loop

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bowl!`)
        
    }
    return gifts;
}

wrapGifts(gifts);


function writeCards(names, eventName) {
    const messages = [];
    for (let c = 0; c < names.length; c++) {
      messages.push(`Thank you, ${names[c]}, for the wonderful ${eventName} gift!`);
        
    }

 return messages;
}

  // while loop

  // while forumla ([condition]){
   // [loop body]
//  }



function countDown(positiveNumber){

    while (positiveNumber >= 0){
        // used >= because it needs to count to 0 not 1
        console.log(positiveNumber);
        // it is logging the positive number until it hits 0 and stops
        positiveNumber--; 
    // postiveNumber-- is decreasing by 1 everytime through the loop

    }
}
    countDown(4);
    // instructions wanted to count down from 4 till 0