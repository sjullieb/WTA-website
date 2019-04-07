import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hike-parameters',
  templateUrl: './hike-parameters.component.html',
  styleUrls: ['./hike-parameters.component.css']
})
export class HikeParametersComponent {

  @Input() short: bool;
  @Input() location: bool;
  @Input() length: number;
  @Input() elevation: number;
  @Input() highestPoint: number;
  @Input() rating: number;
  @Input() votes: number;
}
