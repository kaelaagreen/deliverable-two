let petName= prompt("Name your pet.");
let happyTotal=0;
let energyTotal=0;
for (let i=0; i<6; i++){
    let userInput= prompt("feed, pet, or walk?");

    if(userInput == "feed"){
        energyTotal = energyTotal + 2
    }
    if(userInput == "pet") {
        happyTotal = happyTotal + 1
    }
    if(userInput == "walk") {
        if(energyTotal == 0) {
          alert("Not enough energy to walk")
      } else {
          happyTotal = happyTotal + 2
        energyTotal = energyTotal - 1
      }
    }
} 
console.log(petName + " has " + happyTotal + " happiness and " + energyTotal + " energy.");
