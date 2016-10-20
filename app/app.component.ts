import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center">Restaurant Reviews App</h1>
    <new-restaurant (newRestaurantSender)="addRestaurant($event)"></new-restaurant>
    <div class="row">
      <div class="col-xs-6">
        <restaurant-list [childRestaurantList]="masterRestaurantList" (selectedRestaurantSender)="showDetails($event)"></restaurant-list>
      </div>
      <div class="col-xs-6">
        <div *ngIf="selectedRestaurant">
          <restaurant-display [selectedRestaurant]="selectedRestaurant" (addReviewSender)="showReviewForm($event)"></restaurant-display>
        </div>
        <div *ngIf="selectedRestaurantForReview">
          <new-review (newReviewSender)="newReview($event)"></new-review>
        </div>
        <div *ngIf="selectedRestaurant && selectedRestaurant.reviews.length > 0">
          <review-list [selectedRestaurant]="selectedRestaurant"></review-list>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [];
  public selectedRestaurant: Restaurant = null;
  public selectedRestaurantForReview: Restaurant = null;
  addRestaurant(newRestaurantFromChild: Restaurant) {
    this.masterRestaurantList.push(newRestaurantFromChild);
  }
  showDetails(selectedRestaurantFromChild: Restaurant) {
    this.selectedRestaurant = selectedRestaurantFromChild;
  }
  showReviewForm(selectedRestaurantFromChild: Restaurant) {
    this.selectedRestaurantForReview = selectedRestaurantFromChild;
  }
  newReview(newReviewFromChild: Review) {
    this.selectedRestaurantForReview.reviews.push(newReviewFromChild);
    var totalRating: number = 0;
    var totalWaitTime: number = 0;
    var totalReviews: number = this.selectedRestaurantForReview.reviews.length;
    for(var i = 0; i < totalReviews; i++) {
      totalRating += this.selectedRestaurantForReview.reviews[i].rating;
      totalWaitTime += this.selectedRestaurantForReview.reviews[i].waitTime;
    }
    this.selectedRestaurantForReview.avgWaitTime = totalWaitTime / totalReviews;
    this.selectedRestaurantForReview.avgRating = totalRating / totalReviews;
    this.selectedRestaurantForReview = null;
  }
  calculateAverage(Restaurant: Restaurant) {

  }
}
