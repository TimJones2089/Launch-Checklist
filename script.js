// Write your JavaScript code here!



window.addEventListener("load", function() {
    // console.log(myFetch());
    // console.log(pickPlanet());
 
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        planetChoice = pickPlanet(listedPlanets);
       
       addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image)
       console.log(addDestinationInfo)
    })

  

    formButton = document.getElementById("formSubmit");
    formButton.addEventListener('click', (event) => {
        document = document;
        list = document.getElementById("faultyItems");
        pilot = document.getElementById("pilotName");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoLevel = document.querySelector("input[name=cargoMass]");
        
    formSubmission(document,list,pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);
        event.preventDefault()
    });
    
 });