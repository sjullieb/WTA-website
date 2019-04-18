import { Pipe, PipeTransform } from '@angular/core';
import { Hike } from './models/hike.model';

@Pipe({
  name: "searchByName",
  pure: false
})

export class SearchByNamePipe implements PipeTransform {


  transform(input: Hike[], searchString: string){
    searchString = searchString.toLowerCase();
    var output: Hike[] = [];
    if (searchString == ""){
      return input;
    }

    for (var i = 0; i < input.length; i++) {
      let hikeName = input[i].name.toLowerCase();
      if (hikeName.includes(searchString, 0) === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
