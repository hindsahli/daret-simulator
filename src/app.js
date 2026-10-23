"use strict";

let acceptedName = /^[\p{L}\p{M}0-9 -]{3,40}$/u;
const nameInput = document.getElementById("nom-cercle");
let nameErreurMssg = document.getElementById("nom-cercle-erreur");
const cotisationInput = document.getElementById("cotisation");
let cotisationInputErreur = document.getElementById("cotisation-erreur");
const today = new Date();
const dateInput = document.getElementById("date-debut");
let dateInputErreur = document.getElementById("date-debut-erreur");

const participantsList = document.getElementById("participants-liste");
const participantsCounter = document.getElementById("participants-compteur");
const participantsBtn = document.getElementById("ajouter-participant");
const participantsErreur = document.getElementById("participants-erreur");
const minParticipants = Number(participantsList.dataset.min);
const maxParticipants = Number(participantsList.dataset.max);

nameInput.addEventListener("input", () => {
  if (
    acceptedName.test(nameInput.value)
  ) /*we check here if the input value follows the regix rules*/ {
    nameErreurMssg.textContent = "";
  } else {
    nameErreurMssg.classList.remove("hidden");
    nameErreurMssg.textContent =
      "Le nom doit contenir 3 à 40 caractères et uniquement des lettres, chiffres, espaces ou tirets.";
  }
});

cotisationInput.addEventListener("input", (e) => {
  console.log(e);
  if (!Number.isInteger(Number(cotisationInput.value))) {
    cotisationInputErreur.classList.remove("hidden");
    cotisationInputErreur.textContent =
      "La cotisation doit être un nombre entier.";
  } else if (cotisationInput.value > 50000 || cotisationInput.value < 100) {
    cotisationInputErreur.classList.remove("hidden");
    cotisationInputErreur.textContent =
      "La cotisation doit être comprise entre 100 et 50 000 MAD.";
  } else {
    cotisationInputErreur.classList.remove("hidden");
    cotisationInputErreur.textContent = "";
  }
});

dateInput.addEventListener("input", () => {
  if (new Date(dateInput.value) < today) {
    dateInputErreur.classList.remove("hidden");
    dateInputErreur.textContent =
      "La date de début doit être aujourd'hui ou plus tard.";
  } else {
    dateInputErreur.textContent = "";
  }
});

function addParticipants() {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const removeBtn = document.createElement("button");

  input.type = "text";
  input.name = "participants[]";
  input.placeholder = "Prénom du participant";
  input.required = true;

  removeBtn.type = "button";
  removeBtn.textContent = "Retirer";

  li.appendChild(input);
  li.appendChild(removeBtn);
  participantsList.appendChild(li);
}

participantsList.addEventListener("click", (e) => {
  if (e.target.textContent == "Retirer" ) {
    if (participantsList.children.length > minParticipants) {
      e.target.parentElement.remove();
    }
  }
});

addParticipants();
addParticipants();
addParticipants();

