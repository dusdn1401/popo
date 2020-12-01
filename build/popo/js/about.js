function about(){
	$('.container').each(function(i){
		var skill = $(this).find('.skills');
		var percent = skill.text(); 
		skill.delay(i*500).animate({'width':percent});
	});
};

export default about;