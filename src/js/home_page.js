require('../css/home_page.css');

const img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/random.jpg');

document.getElementById('img_container').appendChild(img);

console.log('Load from home page');