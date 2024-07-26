import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { AddBrandCoordinatorComponent } from './page/brand-coordinator/add-brand-coordinator/add-brand-coordinator.component';
import { ViewBrandCoordinatorComponent } from './page/brand-coordinator/view-brand-coordinator/view-brand-coordinator.component';
import { AddMarketingAdminComponent } from './page/marketing-admin/add-marketing-admin/add-marketing-admin.component';
import { ViewMarketingAdminComponent } from './page/marketing-admin/view-marketing-admin/view-marketing-admin.component';
import { AddMedicalRepComponent } from './page/medical-rep/add-medical-rep/add-medical-rep.component';
import { ViewMedicalRepComponent } from './page/medical-rep/view-medical-rep/view-medical-rep.component';
import { AddSalesRepComponent } from './page/sales-rep/add-sales-rep/add-sales-rep.component';
import { ViewSalesRepComponent } from './page/sales-rep/view-sales-rep/view-sales-rep.component';
import { CardModule } from 'src/app/theme/shared/components';
import { AddBusinessManagerComponent } from './page/business-manager/add-business-manager/add-business-manager.component';
import { ViewBusinessManagerComponent } from './page/business-manager/view-business-manager/view-business-manager.component';
import { AddSalesCoordinatorComponent } from './page/sales-coordinator/add-sales-coordinator/add-sales-coordinator.component';
import { ViewSalesCoordinatorComponent } from './page/sales-coordinator/view-sales-coordinator/view-sales-coordinator.component';


@NgModule({
  declarations: [        
    AddBrandCoordinatorComponent,
    ViewBrandCoordinatorComponent,
    AddMarketingAdminComponent,
    ViewMarketingAdminComponent,
    AddMedicalRepComponent,
    ViewMedicalRepComponent,
    AddSalesRepComponent,
    ViewSalesRepComponent,
    AddBusinessManagerComponent,
    ViewBusinessManagerComponent,
    AddSalesCoordinatorComponent,
    ViewSalesCoordinatorComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CardModule
    
  ]
})
export class TeamModule { }
