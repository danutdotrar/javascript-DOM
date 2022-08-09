const container = document.querySelector('#container');

//div class container
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//p with red text
const paragh = document.createElement('p');
paragh.classList.add('paragh');
paragh.textContent = "Hey I'm red!";
paragh.style.color = 'red';

container.appendChild(paragh);

//h3 witu blue text
const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';

container.appendChild(header3);


//div with black border, pink background
const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.backgroundColor = 'pink';
content2.style.border = '2px black';

//h1 inside div content2
const h1Content2 = document.createElement('h1');
h1Content2.classList.add('h1content2');
h1Content2.textContent = "I'm in a div";

content2.appendChild(h1Content2);

//p inside div content2
const pContent2 = document.createElement('p');
pContent2.textContent = "ME TOO!";

content2.appendChild(pContent2);

//append content2 div in the parent container
container.appendChild(content2);


