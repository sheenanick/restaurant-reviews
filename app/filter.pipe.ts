import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(input: Restaurant[], filterBy) {
    var output: Restaurant[] = [];
    if(filterBy === 'All'){
      return input;
    } else {
      for(var i = 0; i < input.length; i++) {
        if(input[i].specialty === filterBy) {
          output.push(input[i])
        }
      }
      return output;
    }
  }
}
