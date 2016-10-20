import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'new-review',
  template: `
    <div *ngIf="selectedRestaurant">
      <h3>Add New Review</h3>
      <div class="form-group">
        <label>Title:</label>
        <input class="form-control" #title>
      </div>
      <div class="form-group">
        <label>Rating:</label>
        <select class="form-control" #rating>
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
          <option value=4>4</option>
          <option value=5>5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Wait Time (minutes):</label>
        <input class="form-control" type="number" #waitTime>
      </div>
      <div class="form-group">
        <label>Comments:</label>
        <input class="form-control" #comments>
      </div>
      <button class="btn btn-primary" (click)="addClicked(title.value, rating.value, waitTime.value, comments.value); title.value=''; rating.value=1; waitTime.value=''; comments.value='';">Add</button>
    </div>
  `
})

  export class NewReviewComponent {
    @Input() selectedRestaurant: Restaurant;
    @Output() newReviewSender = new EventEmitter();
    addClicked(title: string, rating: number, waitTime: number, comments: string) {
      var reviewToAdd: Review = new Review(title, +rating, +waitTime, comments);
      this.newReviewSender.emit(reviewToAdd);
    }
  }
