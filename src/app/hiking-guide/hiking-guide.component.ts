import { Component } from '@angular/core';

@Component({
  selector: 'app-hiking-guide',
  templateUrl: './hiking-guide.component.html',
  styleUrls: ['./hiking-guide.component.css']
})
export class HikingGuideComponent {
  searchHikeName: string = '';
  constructor() { }

  startSearch(hikeName: string){
    this.searchHikeName = hikeName;
  }
}
