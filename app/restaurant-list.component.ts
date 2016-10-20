import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-list',
  template: `
    <h3>All Restaurants</h3>
    <div *ngFor="let currentRestaurant of childRestaurantList">
      <h4>{{ currentRestaurant.name }}</h4>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
}
