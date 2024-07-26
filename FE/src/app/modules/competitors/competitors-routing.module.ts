import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompetitorComponent } from './page/competitor/add-competitor/add-competitor.component';
import { ViewCompetitorComponent } from './page/competitor/view-competitor/view-competitor.component';
import { AddCompetitorProductComponent } from './page/competitor-product/add-competitor-product/add-competitor-product.component';
import { ViewCompetitorProductComponent } from './page/competitor-product/view-competitor-product/view-competitor-product.component';

const routes: Routes = [
  {
    path:'add-competitor',
    pathMatch:'full',
    component:AddCompetitorComponent
  },
  {
    path:'view-competitor',
    pathMatch:'full',
    component:ViewCompetitorComponent
  },
  {
    path:'add-competitor-product',
    pathMatch:'full',
    component:AddCompetitorProductComponent
  },
  {
    path:'view-competitor-product',
    pathMatch:'full',
    component:ViewCompetitorProductComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule { }
