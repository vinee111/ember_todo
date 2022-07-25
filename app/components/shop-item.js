import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ListItemComponent extends Component {
  @tracked isEdit= false;
  @tracked isComplete = false;

  @action
  editItem() {
    this.isEdit = true;
  }

  @action
  save(item, shop_arr, index) {
    shop_arr[index] = item;
    this.isEdit = false;
  }

  @action
  complete() {
    this.isEdit = false;
    this.isComplete = true;
  }
}
