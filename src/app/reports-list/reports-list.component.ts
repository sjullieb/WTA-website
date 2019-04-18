import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Report } from '../models/report.model';
import { HikeService } from '.././hike.service';
// import { ReportService } from '.././report.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  hikeId: string;
  reports;
  // reports: Report[] = [new Report("hikingwithlittledogs", new Date("03/10/2019"), "Day hike", "Trail in good condition", "Road suitable for all vehicles", "No bugs", "Snow free", "Yep. Another long drive for a day hike. Who cares!  It’s totally worth it. First time to the Hanford Reach and I’m sure I’ll go back. BTW- nicest dirt road in the history of dirt roads!"),
  // new Report("HaroldC3", new Date("03/08/2019"),"Day hike","Trail in good condition", "Road suitable for all vehicles", "No bugs", "Snow free", "First time hiking this trail and it was a really nice hike.  It was windy though (10-20mph, 30mph gusts) which kept my wife and I cool but blasted us when we got to the dunes.  The hike itself is really nice because it's away from everything and not very many people hike it.  We went on a Saturday afternoon and saw only one car but saw no one on the trail.")];

//  constructor(private router: Router, private hikeService: HikeService) { }
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private hikeService: HikeService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikeId = urlParameters['id'];
    })
    this.reports = this.hikeService.getReportsById(this.hikeId);
    console.log(this.reports);
  }

  addNew(){
    let newReport = new Report('fff', new Date(), '', 'conditions', 'road', 'bugs', 'snow', 'description');
    this.hikeService.addReport(this.hikeId, newReport);
  }
}
