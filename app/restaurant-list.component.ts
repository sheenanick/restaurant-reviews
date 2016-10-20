import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Restaurant } from './restaurant.model';


@Component({
  selector: 'restaurant-list',
  template: `
    <h3>Restaurant List</h3>
    <div>
      <label>Sort by specialty</label>
      <select (change)="onChangeFilter($event.target.value)">
        <option value="All">Show All</option>
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
    <div *ngIf="childRestaurantList.length === 0">
      <h4><em>No Restaurants</em></h4>
    </div>
    <div *ngFor="let currentRestaurant of childRestaurantList | filter:filterBy">
      <h4 (click)="showClicked(currentRestaurant)">{{ currentRestaurant.name }}</h4>
    </div>
  `
})

export class RestaurantListComponent {
  @Input() childRestaurantList: Restaurant[];
  @Output() selectedRestaurantSender = new EventEmitter();
  showClicked(currentRestaurant: Restaurant){
    this.selectedRestaurantSender.emit(currentRestaurant);
  }
  public filterBy: string = 'All';
  onChangeFilter(optionFromMenu) {
    this.filterBy = optionFromMenu;
  }
}
