import React from 'react';
import ReactDOM from 'react-dom';
import angular from 'angular';

import band from './bands';
import css from '../css/home_page.css';
import config from '../../config/config.json';
import randomImage from '../images/random.jpg';

const img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = randomImage;

document.getElementById('img_container').appendChild(img);
$('#testDiv').text('jQuery modified this content');

console.log('Load from home page');

// For React
class TestComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is a React testing component</h1>
            </div>
        );
    }
}

ReactDOM.render(<TestComponent />, document.getElementById('reactContainer'));

// For Angular
const app = angular.module('app', []);
band(app);
