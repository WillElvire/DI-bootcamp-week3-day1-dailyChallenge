/**
 * @author : Wilfried koua
 * @description : The purpose of this code is to know deeply about system solar using dom element
 * @param  : planet : Object
 * @param  : Section : HTMLElement
 */

/******************** EXERCICE 1 ********************/

//setting up variables
let planets = [
  { planetName: "Mercury", moon: 0 },
  { planetName: "Venus",   moon: 0 },
  { planetName: "Earth",   moon: 1 },
  { planetName: "Mars",    moon: 2 },
  { planetName: "Jupiter", moon: 80 },
  { planetName: "Saturn",  moon: 83 },
  { planetName: "Uranus",  moon: 27 },
  { planetName: "Neptune", moon: 14 },
];
let section = document.querySelector("section");

//starting loop for create a div and all the class planet inside
for (let planet of planets) {

  let div       =  create("div");
  div.className = `planet ${planet.planetName}`;

  // starting loop for create a moon for each planet
  for(let i = 0 ; i < planet.moon ; i++) {
    let moon = create("div");
    moon.className = "moon";
    div.append(moon);
  }

  // append all modification to our section
  section.append(div);
}


function create(element) {
    return document.createElement(element);
}