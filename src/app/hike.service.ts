import { Injectable } from '@angular/core';
import { Hike } from './models/hike.model';
import { Report } from './models/report.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class HikeService {
  hikes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hikes = database.list('hikes');
  }

  getHikes(){
    return this.hikes;
  }

  getHikeById(hikeId: string){
    return this.database.object('hikes/' + hikeId);
  }

  getReportsById(hikeId: string){
    let ref = `hikes/${hikeId}/reports/`;
    console.log(ref);
    console.log(firebase.database().ref(ref));
    return this.database.list(ref);
  }

  addReport(hikeId: string, report: Report){
    let ref = `hikes/${hikeId}/reports/`;
    console.log(report);
    let key = this.database.list(ref).push(report);
    console.log(key);
  }
}
