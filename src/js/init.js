// import { defaults } from "./modules/defaults";
// import { modals } from "./modules/modals";
import { forms } from "./modules/forms";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {

	// defaults.init();
	// modals.init();
	forms.init();
	
	
};

export { App };