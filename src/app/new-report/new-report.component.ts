import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HikeService } from '../hike.service';
import { Report } from '../models/report.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css'],
  providers: [HikeService]
})
export class NewReportComponent implements OnInit {
  hikeId: string;

  constructor(private route: ActivatedRoute, private location: Location, private hikeService: HikeService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikeId = urlParameters['id'];
      console.log(this.hikeId);
    });
  }

  submitForm(userName: string, hikeDate: string, type: string, trailConditions: string, road: string, bugs: string, snow: string, description: string){
   var newReport = new Report(userName, new Date(), type, trailConditions,  road,  bugs,  snow,  description);
   console.log(newReport);
   this.hikeService.addReport(this.hikeId, newReport);
  }
}
