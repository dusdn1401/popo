import 'babel-polyfill';
import common from './common.js';
import about from './about.js';
import project from './project.js';
import home from './home.js';

function init(){
	common();
	home();
	about();
	project();
};

window.addEventListener('DOMContentLoaded', init);