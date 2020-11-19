$(function(){
	

	const menu = document.querySelector('.menu-trigger');
	const nav = document.querySelector('nav');
	let navClose = false;
	menu.addEventListener('click', function() {
		menu.classList.toggle('active');
		nav.classList.toggle('active');
		navClose ? navClose=false : navClose=true;
	})

	window.addEventListener('click',function(e){
		console.log(e.target.nodeName)
		if(navClose && e.target.nodeName != 'NAV'){
			menu.classList.toggle('active');
			nav.classList.toggle('active');
		}
	},true)

});