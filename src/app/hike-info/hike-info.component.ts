import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hike-info',
  templateUrl: './hike-info.component.html',
  styleUrls: ['./hike-info.component.css']
})
export class HikeInfoComponent {
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() location: boolean;
  @Input() length: string;
  @Input() gain: number;
  @Input() highestPoint: number;
  @Input() rating: number;
  hikeParamShort: boolean = true;

}
