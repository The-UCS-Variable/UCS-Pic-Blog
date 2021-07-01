import { OnOff } from "./exports.js";

console.log("version: 2.0.0-alpha");

fetch("svg-paths.json")
  .then((res) => res.json())
  .then((svg_paths) => {
    for (let id in svg_paths) {
      let draw = svg_paths[id];
      document.getElementById(id)!.setAttribute("d", draw);
    }
  });

OnOff("The-Pro-Button", "Pro-status");
OnOff("The-Theme-Button", "Theme-status");

/*
colors: #39ff14 , #ff1439 , hsl(51, 100%, 59%)

To-do list:
- Add a Hover Tips popup at a fixed position
- Ability for users to change the accent color (Maybe)
- check out lit / web components stuff

*/
