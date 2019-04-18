import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { HikeParametersComponent } from './hike-parameters/hike-parameters.component';
import { HeaderComponent } from './header/header.component';
import { SearchHikesComponent } from './search-hikes/search-hikes.component';
import { HikeInfoComponent } from './hike-info/hike-info.component';
import { ResultListComponent } from './result-list/result-list.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HikingGuideComponent } from './hiking-guide/hiking-guide.component';
import { NewReportComponent } from './new-report/new-report.component';

import { SearchByNamePipe } from './searchByName.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HikeParametersComponent,
    HeaderComponent,
    SearchHikesComponent,
    HikeInfoComponent,
    ResultListComponent,
    HikeDetailsComponent,
    ReportsListComponent,
    HikingGuideComponent,
    NewReportComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
