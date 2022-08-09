const btn = document.querySelector('#btn');

// Method 1
// btn.onclick = () => alert("Hello World!");

// Method 2
btn.addEventListener('click', () => {
    alert("Hello World!");
});

// Function for btn-2
function alertFunction() {
    alert("You pressed it well.");
};

const btn2 = document.querySelector('#btn-2');

// Method 1 for btn-2
// btn2.onclick = alertFunction;

// Method 2 for btn-2
btn2.addEventListener('click', alertFunction);


btn.addEventListener('click', function (e) {
    console.log(e.target);
  });


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});