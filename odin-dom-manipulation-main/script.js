const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// add a <p> with red text that says "Hey I'm red!"

const red = document.createElement('p');
red.classList.add('red');
red.textContent = 'Hey I\'m red!';
red.style.cssText = "color : red";

container.appendChild(red);

// ad an h3 with blue text that says "I'm a blue h3!"

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = 'I\'m a blue h3!';
blue.style.cssText = 'color : blue';

container.appendChild(blue);

// add a <div> with a black border and pink background color with the following elements inside of it:
// - another <h1> that says “I’m in a div”
// - a <p> that says “ME TOO!”
// - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const funDiv = document.createElement('div');
funDiv.classList.add('funDiv');

funDiv.style.cssText = 'border-style : solid; background-color : pink';

const nestedHeader = document.createElement('h1');
nestedHeader.classList.add('nestedHeader');
nestedHeader.textContent = 'I\'m in a div!';

const nestedPara = document.createElement('p');
nestedPara.classList.add('nestedPara');
nestedPara.textContent = 'ME TOO!';

funDiv.appendChild(nestedHeader);
funDiv.appendChild(nestedPara);

container.appendChild(funDiv);