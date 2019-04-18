import { OnInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hike } from './../models/hike.model';
import { HikeService } from '.././hike.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
  providers: [HikeService]
})
export class ResultListComponent implements OnInit{
  @Input() searchHikeName: string;
  hikes;

  constructor(private router: Router, private hikeService: HikeService){}
  ngOnInit(){
    this.hikes = this.hikeService.getHikes();
  }

  goToDetails(clickedHike)
  {
    this.router.navigate(['hikes', clickedHike.$key]);
  }
}
