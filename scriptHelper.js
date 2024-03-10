// Write your helper functions here!

// require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }



 function validateInput(testInput) {
    if(testInput === '' || null){
        return "Empty";
            };
    if(isNaN(testInput) === true){
        return "Not a Number";
                
            };
    if(isNaN(testInput) === false){
        return "Is a Number";
                
            };
               
    };

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list =  document.getElementById("faultyItems");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    
    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || 
    validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
               alert('All fields required');    
                    
    };
                   
                
    if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number'){
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    };
   
     
    if(validateInput(fuelLevel) === 'Is a Number' && fuelLevel.value < 10000){
       list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = " Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
      
    };

    if(validateInput(cargoLevel) === 'Is a Number' && cargoLevel.value > 10000){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

    };

    if(validateInput(fuelLevel) === 'Is a Number' && fuelLevel.value >= 10000 && 
    validateInput(cargoLevel) === 'Is a Number' &&  cargoLevel.value <= 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    };

   
};





 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

