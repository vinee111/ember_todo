import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked newItem = '';
  @tracked shoppingList = [];

  @action
  addItem() {
    if(this.newItem!=''){
      this.shoppingList.pushObject(this.newItem);
      this.newItem = '';
    }
  }

  @action
  deleteItem(itemIndex) {
    this.shoppingList.splice(itemIndex, 1);
    this.shoppingList = this.shoppingList;
  }

}