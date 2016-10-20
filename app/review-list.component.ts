import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'review-list',
  template: `
    <h3>Reviews:</h3>
    <div *ngFor="let review of selectedRestaurant.reviews">
      <h4>{{ review.title }}</h4>
      <p>Rating: {{ review.rating }} out of 5</p>
      <p>Wait Time: {{ review.waitTime }} minutes</p>
      <p>Comments: {{ review.comments }}</p>
    </div>
  `
})

export class ReviewListComponent {
  @Input() selectedRestaurant: Restaurant;
}
