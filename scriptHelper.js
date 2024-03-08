// Write your helper functions here!

// require('cross-fetch/polyfill');

// let pilot = document.getElementById("pilotName");
// let coPilot = document.getElementById("copilotName");
// let fuelLevel = document.getElementById("fuelLevel");
// let cargoMass = document.getElementById("cargoMass");
// let faultyItems = document.getElementById("faultyItems");
// let piolotStatus = document.getElementById("pilotStatus");
// let coPilotStatus = document.getElementById("copilotStatus");
// let fuelStatus = document.getElementById("fuelStatus");
// let cargoStatus = document.getElementById("cargoStatus");
// let launchStatus = document.getElementById("launchStatus");
// let form = document.getElementById("testForm");
// let formInput = document.querySelector("formField");
// let submit = document.getElementById("formSubmit");

// function allFieldsAlert() {
//     let form = document.getElementById("testForm");
//     let pilot = document.getElementById("pilotName");
//     let coPilot = document.getElementById("copilotName");
//     let fuelLevel = document.getElementById("fuelLevel");
//     let cargoMass = document.getElementById("cargoMass");
//            if(pilot.value === '' || coPilot.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
//             alert('All fields required.');
//            };
//            event.preventDefault();
        
    
// };


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
    document = document;
    list = document.getElementById("faultyItems");
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoMass]");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    validateInput(document);
    validateInput(list);
    validateInput(fuelLevel);
    validateInput(cargoLevel);
 
    if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number'){
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    };
   
     
    if(fuelLevel.value < 10000){
        list.style = "visibility: Visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = " Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    };

    if(cargoLevel.value > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

    };

    if(fuelLevel.value >= 10000 && cargoLevel.value <= 10000){
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