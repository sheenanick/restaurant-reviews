import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  template: `
    <div *ngIf="selectedRestaurant">
      <h3>Add New Restaurant</h3>
      <div class="form-group">
        <label>Restaurant Name:</label>
        <input class="form-control" [(ngModel)]="selectedRestaurant.name">
      </div>
      <div class="form-group">
        <label>Specialty:</label>
        <select class="form-control" [(ngModel)]="selectedRestaurant.specialty">
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
        <input class="form-control" [(ngModel)]="selectedRestaurant.address">
      </div>
      <div class="form-group">
        <label>Phone number:</label>
        <input class="form-control" [(ngModel)]="selectedRestaurant.phone">
      </div>
      <div class="form-group">
        <label>Price:</label>
        <select class="form-control" [(ngModel)]="selectedRestaurant.price">
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </select>
      </div>
      <button class="btn btn-secondary" (click)="doneClicked(selectedRestaurant)">Done</button>
    </div>
  `
})

export class EditRestaurantComponent {
  @Input() selectedRestaurant: Restaurant;
  @Output() doneClickedSender = new EventEmitter;
  doneClicked(selectedRestaurant) {
    this.doneClickedSender.emit(selectedRestaurant);
  }
}
