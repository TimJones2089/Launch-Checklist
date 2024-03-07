// Write your helper functions here!

require('cross-fetch/polyfill');

let pilot = document.getElementById("pilotName");
let coPilot = document.getElementById("copilotName");
let fuelLevel = document.getElementById("fuelLevel");
let cargoMass = document.getElementById("cargoMass");
let faultyItems = document.getElementById("faultyItems");
let piolotStatus = document.getElementById("pilotStatus");
let coPilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");
let launchStatus = document.getElementById("launchStatus");
let form = document.getElementById("testForm");
let formInput = document.querySelector("formField");
let submit = document.getElementById("formSubmit");

function allFieldsAlert() {
    window.addEventListener('load', () => {
        let form = document.getElementById("testForm");
        form.addEventListener('submit', (event) => {
            let pilot = document.getElementById("pilotName");
            let coPilot = document.getElementById("copilotName");
            let fuelLevel = document.getElementById("fuelLevel");
            let cargoMass = document.getElementById("cargoMass");
           if(pilot.value === '' || coPilot.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
            alert('All fields required.');
           };
           event.preventDefault();
        });
    });
};


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
   window.addEventListener('load', function() {
    let form = document.getElementById("testForm");
    testInput = form.input;
       
            if(testInput === '' || null){
                 return "Empty";
            };
            if(isNaN(testInput) === true){
                return "Not a Number";
                
            };
            if(Number(testInput) === true){
                return "Is a Number";
                
            };
               
        
    });

    

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     
   validateInput(document)
   
   
   
   
    window.addEventListener('load', function() {
            
        piolotStatus.innerHTML = `${pilot.value} Ready.`;
        coPilotStatus.innerHTML = `${coPilot.value} Ready.`;
        
    if(fuelLevel < 10000){
        faultyItems.style = "visibility: visible";
        fuelStatus.innerHTML = "Not enough fuel for the journey.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    };

    if(cargoMass > 10000){
        faultyItems.style = "visibility: visible";
        cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

    };

    if(fuelLevel >= 10000 && cargoMass <= 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.colore = "green";
    };

    });

    
    

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