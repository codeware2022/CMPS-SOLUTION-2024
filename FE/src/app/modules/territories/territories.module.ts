import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoriesRoutingModule } from './territories-routing.module';
import { CardModule } from 'src/app/theme/shared/components/card/card.module';
import { AddDistributorComponent } from './page/distributor/add-distributor/add-distributor.component';
import { ViewDistributorComponent } from './page/distributor/view-distributor/view-distributor.component';
import { AddAreaComponent } from './page/area/add-area/add-area.component';
import { ViewAreaComponent } from './page/area/view-area/view-area.component';
import { AddRangeComponent } from './page/range/add-range/add-range.component';
import { ViewRangeComponent } from './page/range/view-range/view-range.component';
import { AddZoneComponent } from './page/zone/add-zone/add-zone.component';
import { ViewZoneComponent } from './page/zone/view-zone/view-zone.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DistributorProfileComponent } from './page/distributor/distributor-profile/distributor-profile.component';
import { AddTownComponent } from './page/town/add-town/add-town.component';
import { ViewTownComponent } from './page/town/view-town/view-town.component';
import { AreaTownComponent } from './page/area/view-area/area-town/area-town.component';

@NgModule({
  declarations: [   
    AddDistributorComponent, 
    ViewDistributorComponent,
    AddAreaComponent, 
    ViewAreaComponent, 
    AddRangeComponent, 
    ViewRangeComponent, 
    AddZoneComponent, 
    ViewZoneComponent, DistributorProfileComponent, AddTownComponent, ViewTownComponent, AreaTownComponent
  ],
  imports: [
    CommonModule,
    TerritoriesRoutingModule,
    CardModule,   
    SharedModule,
  ]
})
export class TerritoriesModule { }
