import { Component } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1 class="text-center">Restaurant Reviews App</h1>
    <new-restaurant (newRestaurantSender)="addTask($event)"></new-restaurant>
    <restaurant-list [childRestaurantList]="masterRestaurantList"></restaurant-list>
  </div>
  `
})

export class AppComponent {
  public masterRestaurantList: Restaurant[] = [];
  addTask(newRestaurantFromChild: Restaurant) {
    console.log(newRestaurantFromChild);
    this.masterRestaurantList.push(newRestaurantFromChild);
  }
}
