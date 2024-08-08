// Verify I am "grabbing" the form correctly
// console.log('form: ', form);

// element.addEventListener('eventName', function)

// 1. Arrow function
// form.addEventListener('submit', (event) {
//     event.preventDefault();
//     console.log('I am in the event in the arrow function');
// });

// 2. creating a function outside and pass it
// function handleSubmit(event){
//     event.preventDefault();
//     console.log("i am in the event, calling an other function");
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('i am in event, calling an outside arrow function');
// };

// form.addEventListener('submit', handleSubmit)

// 3. form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('i am in the event function');
// });

// --------------------------------------------------------------------

// 1.

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log("event", event);

//   const formElements = event.target.elements;
//   const inputText = formElements["input-text"].value;
//   console.log("formElements: ", formElements, "\nInputText: ", inputText);
// }

// form.addEventListener("submit", handleSubmit);

// 2. in script.js
