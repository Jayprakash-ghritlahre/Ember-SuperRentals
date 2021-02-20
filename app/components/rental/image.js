import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
	@tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }

  // isLarge = false;

	// constructor(...args) {
	//   super(...args);
	//   this.isLarge = false;
	//   // this.isLarge = true;
	// }	
}
