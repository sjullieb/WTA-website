import { Component } from '@angular/core';
import { Hike } from './models/hike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

//  hikeParamShort = true;

  hike = new Hike("Hanford Reach - North", "Central Washington", "../../assets/images/cherry-creek-falls.jpeg", "7.0 miles, roungtrip", 500, 725.0, 4);

  startSearch(name: string){
    // PIPE
  }

}
