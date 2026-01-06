console.log("loading instructions");

document.querySelector("#eyes").classList.add("hide");
document.querySelector("#teeth").classList.add("hide");
document.querySelector("#nails").classList.add("hide");

document.querySelector("#mark2").addEventListener("click", eyesRed);
function eyesRed() {
  console.log("Eyes are now red");
  document.querySelector("#eyes").classList.remove("hide");
  document.querySelector("#teeth").classList.add("hide");
  document.querySelector("#nails").classList.add("hide");
  document.querySelectorAll("#mark .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark2 .cls-1").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark2 .cls-4").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark3 .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark3 .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
}

document.querySelector("#mark").addEventListener("click", teethPerfect);
function teethPerfect() {
  console.log("Teeth are now perfect");
  document.querySelector("#teeth").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#nails").classList.add("hide");
  document.querySelectorAll("#mark .cls-1").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark .cls-4").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark2 .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark2 .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark3 .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark3 .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
}

document.querySelector("#mark3").addEventListener("click", nailsDirty);
function nailsDirty() {
  console.log("Nails are now dirty");
  document.querySelector("#nails").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#teeth").classList.add("hide");
  document.querySelectorAll("#mark .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark2 .cls-1").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
  document.querySelectorAll("#mark2 .cls-4").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark3 .cls-1").forEach((el) => {
    el.style.fill = "#ff0000";
  });
  document.querySelectorAll("#mark3 .cls-4").forEach((el) => {
    el.style.fill = "#f8cf00";
  });
}
