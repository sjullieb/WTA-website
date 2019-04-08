import { Component } from '@angular/core';
import { Hike } from './models/hike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hikeParamShort = true;

  let hike = new Hike('Hanford Reach - North');
  console.log(hike);
  // this.hike.location = 'Central Washington';
  // this.hike.length = '7.0 miles, roungtrip';
  // this.hike.gain = 500;
  // this.hike.highestPoint = 725.0;
  // console.log(hike);

}
