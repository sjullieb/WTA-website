import { Component, OnInit } from '@angular/core';
import { Hike } from '../models/hike.model';
@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css']
})
export class HikeDetailsComponent implements OnInit {
  hike: Hike = new Hike("Mailbox Peak", "Snoqualmie Region -- North Bend Area", "../../assets/images/mailbox-peak.jpeg", "9.4 miles, roungtrip", 4000, 4822.0, 4);

  constructor() { }

  ngOnInit() {
  }

}
