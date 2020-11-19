$(function(){

	var square = document.querySelector('.square');
	var pop = document.querySelector('.pop');
	square.addEventListener('click', function(){
		square.classList.toggle('active');
		pop.classList.toggle('active');
	})

// ====================================


	$('.fade').not(':first').hide();
            var idx = 0;
            var loop,workSet;
			var fa = document.querySelectorAll('.main .fade');
			var india = document.querySelectorAll('.indi span a');

            //img change

			window.addEventListener('mousewheel', function fade(p) {

				clearTimeout(workSet);
				workSet = setTimeout(function(){
					$('.fade').eq(idx).fadeOut(1000);
					if (p == 'next' || p == undefined) {
						idx++
					} else {
						idx--;
					}
					update();
					$('.fade').eq(idx).fadeIn(1000);

					var pg = document.querySelector('.right .rpage');
					pg.innerHTML = (idx+1) + '/3'

					$('.indi span').eq(idx).addClass('active');
				},100)
			});

            //idx setting
            function update() {
                var len = $('.fade').length;
                if (idx >= len) idx = 0;
                if (idx == -1) idx = len - 1;
            }


			// ==================

			var liEle = document.querySelectorAll('.main .c2 figure');
			var winH = window.innerHeight;
		   window.addEventListener('scroll', fadeFun);
		   function fadeFun() {
			   liEle.forEach(function(el, idx) {
				   if (el.offsetTop - winH < this.scrollY) {
					   el.classList.add('active');
				   } else {
					   el.classList.remove('active');
				   }
			   });
		   }
	
	
	
	
});