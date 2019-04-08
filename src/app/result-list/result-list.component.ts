import { Component, Input } from '@angular/core';
import { Hike } from './../models/hike.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent {
  @Input() childHikeList: Hike[];
}
