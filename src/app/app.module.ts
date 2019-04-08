import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { HikeParametersComponent } from './hike-parameters/hike-parameters.component';
import { HeaderComponent } from './header/header.component';
import { SearchHikesComponent } from './search-hikes/search-hikes.component';


@NgModule({
  declarations: [
    AppComponent,
    HikeParametersComponent,
    HeaderComponent,
    SearchHikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
