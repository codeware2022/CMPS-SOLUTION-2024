import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandCoordinatorComponent } from './page/brand-coordinator/add-brand-coordinator/add-brand-coordinator.component';
import { ViewBrandCoordinatorComponent } from './page/brand-coordinator/view-brand-coordinator/view-brand-coordinator.component';
import { AddMarketingAdminComponent } from './page/marketing-admin/add-marketing-admin/add-marketing-admin.component';
import { ViewMarketingAdminComponent } from './page/marketing-admin/view-marketing-admin/view-marketing-admin.component';
import { AddMedicalRepComponent } from './page/medical-rep/add-medical-rep/add-medical-rep.component';
import { ViewMedicalRepComponent } from './page/medical-rep/view-medical-rep/view-medical-rep.component';
import { AddSalesRepComponent } from './page/sales-rep/add-sales-rep/add-sales-rep.component';
import { ViewSalesRepComponent } from './page/sales-rep/view-sales-rep/view-sales-rep.component';
import { AddBusinessManagerComponent } from './page/business-manager/add-business-manager/add-business-manager.component';
import { ViewBusinessManagerComponent } from './page/business-manager/view-business-manager/view-business-manager.component';

const routes: Routes = [
  {
    path:'add-business-manager',
    pathMatch:'full',
    component:AddBusinessManagerComponent
  },
  {
    path:'view-business-manager',
    pathMatch:'full',
    component: ViewBusinessManagerComponent
  },
  {
    path:'add-brandcoordinator',
    pathMatch:'full',
    component:AddBrandCoordinatorComponent
  },
  {
    path:'view-brandcoordinator',
    pathMatch:'full',
    component:ViewBrandCoordinatorComponent
  },
  {
    path:'add-medicalrep',
    pathMatch:'full',
    component:AddMedicalRepComponent
  },
  {
    path:'view-medicalrep',
    pathMatch:'full',
    component:ViewMedicalRepComponent
  },
  {
    path:'add-salesrep',
    pathMatch:'full',
    component:AddSalesRepComponent
  },
  {
    path:'view-salesrep',
    pathMatch:'full',
    component:ViewSalesRepComponent
  },
  {
    path:'add-marketing-admin',
    pathMatch:'full',
    component:AddMarketingAdminComponent
  },
  {
    path:'view-marketing-admin',
    pathMatch:'full',
    component:ViewMarketingAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
