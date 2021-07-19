$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
		
	});

}); 


document.addEventListener("DOMContentLoaded",function() {
	
	var loading = new TimelineMax();
	loading.fromTo(".upper p",0.6,{ 
		autoAlpha:0,
		y:20,
	
	},{
		autoAlpha:1,
		y:0,
	
	})
	.fromTo(".upper h2",0.6,{
		autoAlpha:0,
		y:20,
	},{
		autoAlpha:1,
		y:0,
	
	})

	.fromTo(".btn1",0.3,{
		autoAlpha:0,
		x:-20,
	},{
		autoAlpha:1,
		x:0,
	
	},"-=0.2")

	.fromTo(".btn2",0.3,{
		autoAlpha:0,
		x:20,
	},{
		autoAlpha:1,
		x:0,
	
	},"-=0.2")
});


	
