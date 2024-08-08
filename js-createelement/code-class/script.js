console.clear();

const form = document.querySelector('[data-js="card-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// console.log("cardContainer: ", cardContainer);

let counter = 0;

// 1. innerHTML
function handleSubmit(event) {
  event.preventDefault();
  //   console.log("event", event);

  counter++;

  const formData = new FormData(event.target);
  const dataForm = Object.fromEntries(formData);

  console.log("dataForm: ", dataForm);

  // Create my new card
  const newCard = document.createElement("section");
  // We need to add a class to the newCard
  newCard.classList.add("card");

  // Create my p for the counter
  const pCounter = document.createElement("p");
  // Text
  pCounter.textContent = "The counter is: " + counter;

  // We need to place the element in my HTML.
  newCard.append(imageCard, pCounter);
  cardContainer.append(newCard);
}

form.addEventListener("submit", handleSubmit);
