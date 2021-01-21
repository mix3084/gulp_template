import Swiper from "swiper/bundle";

var toSwiper = {

	defaults: () => {
		if (!$(".js-swiper-defaults").length) return false;

		const $item         = $('.js-swiper-defaults'),
			  container     = $item.find('.swiper-container').get(),
			  pagination    = $item.find('.swiper-pagination').get(),
			  next          = $item.find('.swiper-button-next').get(),
			  prev          = $item.find('.swiper-button-prev').get();

		const slider = new Swiper(container, {
			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
		})
	},

	init: () => {

		toSwiper.defaults();

	}
}

export { toSwiper }