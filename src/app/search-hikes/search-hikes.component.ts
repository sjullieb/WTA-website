import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-hikes',
  templateUrl: './search-hikes.component.html',
  styleUrls: ['./search-hikes.component.css']
})
export class SearchHikesComponent{
  @Output() search = new EventEmitter();

  startSearch(hikeName: string)
  {
    this.search.emit(hikeName);
  }
}
