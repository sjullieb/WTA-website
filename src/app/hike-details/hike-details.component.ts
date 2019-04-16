import { Component, OnInit } from '@angular/core';
import { Hike } from '../models/hike.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  providers: [HikeService]
})
export class HikeDetailsComponent implements OnInit {
  hikeId: string;
  hike;
//  hike: Hike = new Hike("Mailbox Peak", "Snoqualmie Region -- North Bend Area", "../../assets/images/mailbox-peak.jpeg", "9.4 miles, roungtrip", 4000, 4822.0, 4);

  constructor(private route: ActivatedRoute, private location: Location, private hikeService: HikeService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikeId = urlParameters['id'];
      console.log(this.hikeId);
    });
    this.hike = this.hikeService.getHikeById(this.hikeId);
  }

}
