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

let participantId = 0;

function updateParticipantsCounter() {
  const count = participantsList.children.length;
  if (count > 1) {
    participantsCounter.textContent = count + "participants";
  } else {
    participantsCounter.textContent = count + "participant";
  }
}

function addParticipants() {
  if (participantsList.children.length >= maxParticipants) {
    participantsErreur.classList.remove("hidden");
    participantsErreur.textContent =
      "Vous ne pouvez pas ajouter plus de 20 participants.";
    return;
  }
  const li = document.createElement("li");
  const input = document.createElement("input");
  const removeBtn = document.createElement("button");
  const error = document.createElement("p");

  participantId++;

  input.type = "text";
  input.name = "participants[]";
  input.placeholder = "Prénom du participant";
  input.required = true;
  input.classList.add("border");

  error.id = `participant-erreur-${participantId}`; /*<p id="participant-erreur-1"></p>*/
  error.classList.add("hidden", "text-sm", "text-daret-erreur");

  input.setAttribute("aria-describedby", error.id);

  removeBtn.type = "button";
  removeBtn.textContent = "Retirer";
  removeBtn.classList.add("remove-participant");

  li.appendChild(input);
  li.appendChild(removeBtn);
  li.appendChild(error);
  participantsList.appendChild(li);

  participantsErreur.textContent = "";
  participantsErreur.classList.add("hidden");

  updateParticipantsCounter();
}

function validateParticipants() {
  const participants = participantsList.children;
  let firstInvalidInput = null;

  for (let i = 0; i < participants.length; i++) {
    const input = participants[i].children[0];
    const error = participants[i].children[2];
    const value = input.value.trim();

    if (value.length < 2 || value.length > 30) {
      error.textContent = "Le prénom doit contenir entre 2 et 30 caractères.";

      error.classList.remove("hidden");
      input.setAttribute("aria-invalid", "true");

      if (firstInvalidInput === null) {
        firstInvalidInput = input;
      }
    } else {
      error.textContent = "";
      error.classList.add("hidden");
      input.removeAttribute("aria-invalid");
    }
  }

  return firstInvalidInput;
}

participantsBtn.addEventListener("click", () => {
  addParticipants();
});
participantsList.addEventListener("input", () => {
  validateParticipants();
});

participantsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-participant")) {
    if (participantsList.children.length > minParticipants) {
      e.target.parentElement.remove();

      participantsErreur.textContent = "";
      participantsErreur.classList.add("hidden");

      updateParticipantsCounter();
      validateParticipants();
    } else {
      participantsErreur.classList.remove("hidden");
      participantsErreur.textContent =
        "Il faut garder au moins 2 participants.";
    }
  }
});
for (let i = 0; i < 3; i++) {
  addParticipants();
}
