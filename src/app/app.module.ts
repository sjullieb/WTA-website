import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HikeParametersComponent } from './hike-parameters/hike-parameters.component';


@NgModule({
  declarations: [
    AppComponent,
    HikeParametersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
