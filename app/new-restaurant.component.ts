import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  template: `
    <div *ngIf="newRestaurant">
      <h3>Add New Restaurant</h3>
      <div class="form-group">
        <label>Restaurant Name:</label>
        <input class="form-control" #name>
      </div>
      <div class="form-group">
        <label>Specialty:</label>
        <select class="form-control" #specialty>
          <option value="Cafe">Cafe</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Mexican">Mexican</option>
          <option value="Thai">Thai</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Vegan">Vegan</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Address:</label>
        <input class="form-control" #address>
      </div>
      <div class="form-group">
        <label>Phone number:</label>
        <input class="form-control" #phoneNumber>
      </div>
      <div class="form-group">
        <label>Price:</label>
        <select class="form-control" #price>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </select>
      </div>
      <button class="btn btn-primary" (click)="addClicked(name.value, specialty.value, address.value, phoneNumber.value, price.value); name.value=''; specialty.value='Cafe'; address.value=''; phoneNumber.value=''; price.value='$';">Add</button>
    </div>
  `
})

export class NewRestaurantComponent {
  @Input() newRestaurant: Restaurant;
  @Output() newRestaurantSender = new EventEmitter();
  addClicked(name: string, specialty: string, address: string, phoneNumber: string, price: string) {
    var newRestaurantToAdd: Restaurant = new Restaurant(name, specialty, address, phoneNumber, price);
    this.newRestaurantSender.emit(newRestaurantToAdd);
  }
}
