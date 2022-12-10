/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Arrays;
let who = [
  "El perro",
  "El gato",
  "Mi hamster",
  "La tortuga",
  "Mi abuela",
  "Mi madre",
  "Mi vecino",
  "Mi hijo",
  "Mi hermano"
];
let action = ["comió", "destruyo", "meó", "aplastó", "rompió", "escondio"];
let what = [
  "mi tarea",
  "las llaves",
  "el auto",
  "el celular",
  "el control",
  "la planta",
  "el libro"
];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando jugaba",
  "durante el almuerzo",
  "mientras estaba orando",
  "cuando meditaba",
  "mientras me duchaba",
  "cuando dormia",
  "mientras estudiaba",
  "cuando estaba trabajando"
];
//random
let randWho = Math.floor(Math.random() * who.length);
let randAction = Math.floor(Math.random() * action.length);
let randWhat = Math.floor(Math.random() * what.length);
let randWhen = Math.floor(Math.random() * when.length);

//Selector
var excuse = document.querySelector("#excuse");

function TheExcuse() {
  excuse.innerHTML = `${who[randWho]}
  ${action[randAction]}
    ${what[randWhat]}
      ${when[randWhen]}`;
}
/*Onload*/
window.onLoad = TheExcuse();
