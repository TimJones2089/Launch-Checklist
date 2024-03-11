// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   
    div = document.getElementById("missionTarget");
        div.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${image}">`
    
 };



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
               alert('All fields required.');    
                    
    };

    if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
        alert('Pilot and Copilot names should be letters.');
    };

    if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        alert('Fuel Level and Cargo Mass should be numbers.');
    };
                   
                
    if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number'){
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    };
   
    if(validateInput(fuelLevel) === 'Is a Number' && fuelLevel >= 10000){
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } 


    if(validateInput(fuelLevel) === 'Is a Number' && fuelLevel < 10000){
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
      
    };

    if(validateInput(cargoLevel) === 'Is a Number' && cargoLevel <= 10000){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

   

    if(validateInput(cargoLevel) === 'Is a Number' && cargoLevel > 10000){
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";

    };

    

    if(validateInput(fuelLevel) === 'Is a Number' && fuelLevel >= 10000 && 
    validateInput(cargoLevel) === 'Is a Number' &&  cargoLevel <= 10000){
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    };

   
};





 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
         });
 
     return planetsReturned;
 };
 
 function pickPlanet(planets) {
    return planets[Math.floor((Math.random()*planets.length))];
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

