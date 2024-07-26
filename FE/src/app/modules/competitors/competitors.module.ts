import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitorsRoutingModule } from './competitors-routing.module';
import { AddCompetitorComponent } from './page/competitor/add-competitor/add-competitor.component';
import { ViewCompetitorComponent } from './page/competitor/view-competitor/view-competitor.component';
import { AddCompetitorProductComponent } from './page/competitor-product/add-competitor-product/add-competitor-product.component';
import { ViewCompetitorProductComponent } from './page/competitor-product/view-competitor-product/view-competitor-product.component';
import { CardModule } from 'src/app/theme/shared/components';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  declarations: [
    AddCompetitorComponent,
    ViewCompetitorComponent,
    AddCompetitorProductComponent,
    ViewCompetitorProductComponent
  ],
  imports: [
    CommonModule,
    CompetitorsRoutingModule,
    CardModule,
    SharedModule,
  ]
})
export class CompetitorsModule { }
