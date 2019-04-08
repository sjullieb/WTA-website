import { Component } from '@angular/core';
import { Hike } from './models/hike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  masterHikeList: Hike[] = [
    new Hike("Hanford Reach - North", "Central Washington -- Stevens pass - west", "../../assets/images/cherry-creek-falls.jpeg", "7.0 miles, roungtrip", 500, 725.0, 5),
    new Hike("Mailbox Peak", "Snoqualmie Region -- North Bend Area", "../../assets/images/mailbox-peak.jpeg", "9.4 miles, roungtrip", 4000, 4822.0, 4),
    new Hike("Oyster Dome", "Puget Sound and Islands -- Bellingham Area", "../../assets/images/oyster-dome.jpeg", "5.0 miles, roungtrip", 1050, 2025.0, 4)
];
  //hike = new Hike("Hanford Reach - North", "Central Washington", "../../assets/images/cherry-creek-falls.jpeg", "7.0 miles, roungtrip", 500, 725.0, 4);

  startSearch(name: string){
    // PIPE
  }

}
