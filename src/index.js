import _ from 'lodash';
import './style.css';
import Calendar from './calendar.png';

function component() {
	const element = document.createElement('div');

	// Loadash, now imported by this script
	
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	const myCalendar = new Image();
	myCalendar.src = Calendar;

	element.appendChild(myCalendar);

	return element;
}

document.body.appendChild(component());
