import 'babel-polyfill';
import common from './common.js';
import home from './home.js';
import about from './about.js';
import project from './project.js';


function init(){
	
	var pageUrl = location.pathname,    //popo/index.html
		pageS = pageUrl.lastIndexOf('/')+1,  //뒤에서 / 를 찾아 위치값을 반환
		pageE = pageUrl.lastIndexOf('.'),    //뒤에서 . 을 찾아 위치값을 반화
		pageName = pageUrl.slice(pageS,pageE); // 문자를 잘라서 반환 /에서 .사이의 문자 반환
	
	common(); //모든 페이지 호출
	switch(pageName){
		case 'index':home();break;
		case 'about':about();break;
		case 'project':project();break;
		case 'contact':break;
		default: home(); break;
	}

	
	
};

window.addEventListener('DOMContentLoaded', init);

