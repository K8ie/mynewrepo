import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './home-view/home-view.component';
import { KundenPortalComponent } from './kunden-portal/kunden-portal.component';
import { BeraterPortalComponent } from './berater-portal/berater-portal.component';


export const routes: Routes = [
  {
    path: 'home-view',
    component: HomeViewComponent
  },
  {
    path: 'kunden-portal',
    component: KundenPortalComponent
  },
  {
    path: 'berater-portal',
    component: BeraterPortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
