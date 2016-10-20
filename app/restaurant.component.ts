import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['selectedRestaurant'],
  template: `
    <div *ngIf="selectedRestaurant">
      <h3>Restaurant Details</h3>
      <div>
        <h4>{{ selectedRestaurant.name }}</h4>
        <p>Specialty: {{ selectedRestaurant.specialty }}</p>
        <p>Address: {{ selectedRestaurant.address }}</p>
        <p>Phone Number: {{ selectedRestaurant.phone }}</p>
        <p>{{ selectedRestaurant.price }}</p>
        <div *ngIf="selectedRestaurant.reviews.length === 0">
          <p>Average Rating: <em>No Reviews</em></p>
          <p>Average Wait Time: <em>No Reviews</em></p>
        </div>
        <div *ngIf="selectedRestaurant.reviews.length > 0">
          <p>Average Rating: {{ selectedRestaurant.avgRating.toFixed(1) }}</p>
          <p>Average Wait Time: {{ selectedRestaurant.avgWaitTime.toFixed(0) }} minutes</p>
        </div>
      </div>
      <button class="btn btn-success" (click)="clickedAdd()">Add Review</button>
    </div>
  `
})

  export class RestaurantComponent {
    public selectedRestaurant: Restaurant;
    @Output() addReviewSender = new EventEmitter();
    clickedAdd() {
      this.addReviewSender.emit(this.selectedRestaurant);
    }
  }
