// import { config } from "./config";
// import { modals } from "./modules/modals";
import { forms } from "./modules/forms";
import { toSwiper } from "./modules/to-swiper";

var App = () => {};

App.prototype.init = () => {

	forms.init();
	toSwiper.init();
	
};

export { App };