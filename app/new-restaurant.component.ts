import { Component, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  template: `
    <h3>Add a New Restaurant</h3>
    <div class="form-group">
      <label>Restaurant Name:</label>
      <input class="form-control" #name>
    </div>
    <div class="form-group">
      <label>Specialty:</label>
      <input class="form-control" #specialty>
    </div>
    <div class="form-group">
      <label>Address:</label>
      <input class="form-control" #address>
    </div>
    <div class="form-group">
      <label>Phone number:</label>
      <input class="form-control" #phoneNumber>
    </div>
    <div>
      <label>Price:</label>
      <select #price>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
        <option value="$$$$$">$$$$$</option>
      </select>
    </div>
    <button class="btn btn-primary" (click)="addClicked(name.value, specialty.value, address.value, phoneNumber.value, price.value); name.value=''; specialty.value=''; address.value=''; phoneNumber.value=''; price.value='';">Add</button>
  `
})

export class NewRestaurantComponent {
  @Output() newRestaurantSender = new EventEmitter();
  addClicked(name: string, specialty: string, address: string, phoneNumber: string, price: string) {
    var newRestaurantToAdd: Restaurant = new Restaurant(name, specialty, address, phoneNumber, price);
    console.log(newRestaurantToAdd);
    this.newRestaurantSender.emit(newRestaurantToAdd);
  }
}
