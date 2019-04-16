import { Injectable } from '@angular/core';
import { Hike } from './models/hike.model';
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

  getReports(hikeId: string){
    let ref = `hikes/${hikeId}/reports/`;
    console.log(ref);
    console.log(firebase.database().ref(ref));
    return this.database.list(ref);
  }
}