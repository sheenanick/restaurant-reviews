import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['selectedRestaurant'],
  template: `
    <h3>Restaurant Details</h3>
    <div>
      <p>{{ selectedRestaurant.name }}</p>
      <p>{{ selectedRestaurant.specialty }}</p>
      <p>{{ selectedRestaurant.address }}</p>
      <p>{{ selectedRestaurant.phone }}</p>
      <p>{{ selectedRestaurant.price }}</p>
    </div>
    <button class="btn btn-success" (click)="clickedAdd()">Add Review</button>
    <div *ngIf="selectedRestaurant.reviews.length > 0">
      <h3>Reviews:</h3>
      <div *ngFor="let review of selectedRestaurant.reviews">
        <h4>{{ review.title }}</h4>
        <p>Rating: {{ review.rating }} out of 5</p>
        <p>Wait Time: {{ review.waitTime }} minutes</p>
        <p>Comments: {{ review.comments }}</p>
      </div>
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
