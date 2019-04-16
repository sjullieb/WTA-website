import { Injectable } from '@angular/core';
import { Report } from './models/report.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReportService {
  hikeId: string;
  reports: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.reports = database.list(`hikes/${this.hikeId}/reports`);
  }

  getHikes(){
    return this.reports;
  }

  getReportById(reportId: string){
    return this.database.object(`hikes/${this.hikeId}/reports/${reportId}`);
  }

}
