import css from '../css/home_page.css';
import config from '../../config/config.json';

const img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/random.jpg');

document.getElementById('img_container').appendChild(img);
$('#testDiv').text('jQuery modified this content');

console.log('Load from home page');