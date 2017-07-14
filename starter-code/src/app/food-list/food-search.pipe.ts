import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foodSearch'
})
export class FoodSearchPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if(!search) return value;
    let searchResults = [];
    value.forEach((igorItem) => {
      if(igorItem.name.toLowerCase().includes(search)===true) {
        searchResults.push(igorItem)
      }
    });
    return searchResults;
  }

// value = cows



}
