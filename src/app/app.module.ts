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


@NgModule({
  declarations: [
    AppComponent,
    HikeParametersComponent,
    HeaderComponent,
    SearchHikesComponent,
    HikeInfoComponent,
    ResultListComponent,
    HikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
