import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HikingGuideComponent } from './hiking-guide/hiking-guide.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HikingGuideComponent
  },
  {
    path: 'hikes/:id',
    component: HikeDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
