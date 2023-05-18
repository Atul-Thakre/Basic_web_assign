
var navbar = document.createElement('nav');


var ul = document.createElement('ul');

var homeItem = document.createElement('li');
var homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
homeItem.appendChild(homeLink);

var contactItem = document.createElement('li');
var contactLink = document.createElement('a');
contactLink.href = '#';
contactLink.textContent = 'Contact Us';
contactItem.appendChild(contactLink);

var signUpItem = document.createElement('li');
var signUpLink = document.createElement('a');
signUpLink.href = '#';
signUpLink.textContent = 'Sign Up';
signUpItem.appendChild(signUpLink);

var signInItem = document.createElement('li');
var signInLink = document.createElement('a');
signInLink.href = '#';
signInLink.textContent = 'Sign In';
signInItem.appendChild(signInLink);

ul.appendChild(homeItem);
ul.appendChild(contactItem);
ul.appendChild(signUpItem);
ul.appendChild(signInItem);

navbar.appendChild(ul);

navbar.style.background = 'black';
ul.style.listStyleType = 'none';
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';
ul.style.padding = '20px';

var links = ul.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].style.color = 'white';
}


document.body.appendChild(navbar);

