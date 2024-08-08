console.clear();

const form = document.querySelector('[data-js="card-form"]');

// Verify I am "grabbing" the form correctly
// console.log('form: ', form);

element.addEventListener('eventName', function)

1. Arrow function
form.addEventListener('submit', (event) {
    event.preventDefault();
    console.log('I am in the event in the arrow function');
});

2. creating a function outside and pass it 
function handleSubmit(event){
    event.preventDefault();
    console.log("i am in the event, calling an other function");
}

3. form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('i am in the event function');
});