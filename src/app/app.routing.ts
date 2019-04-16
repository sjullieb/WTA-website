import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HikingGuideComponent } from './hiking-guide/hiking-guide.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HikingGuideComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
