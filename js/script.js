new Swiper(".swiper" , {
	autoplay: {
		delay:1000,
		disableOnInteraction: false,
		stopOnLastSlide: false,
	},
	speed:1500,
	effect:"cube",
	navigation:{
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev",
	},
	pagination:{
		el:".swiper-pagination",
		type:"bullets",
		dynamicBullets:true,
		clickable:true,
	},
})