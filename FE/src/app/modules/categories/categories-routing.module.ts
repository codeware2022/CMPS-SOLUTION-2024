import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMasterComponent } from './page/category-master/category-master.component';
import { AddTherapeuticCategoryComponent } from './page/therapeutic/add-therapeutic-category/add-therapeutic-category.component';
import { ViewTherapeuticCategoryComponent } from './page/therapeutic/view-therapeutic-category/view-therapeutic-category.component';

import { AddProductMasterComponent } from './page/product-master/add-product-master/add-product-master.component';
import { ViewProductMasterComponent } from './page/product-master/view-product-master/view-product-master.component';
import { AddDosageFormComponent } from './page/dosage-form/add-dosage-form/add-dosage-form.component';
import { ViewDosageFormComponent } from './page/dosage-form/view-dosage-form/view-dosage-form.component';
import { AddMeasurementUnitsComponent } from './page/measurement-units/add-measurement-units/add-measurement-units.component';
import { ViewMeasurementUnitsComponent } from './page/measurement-units/view-measurement-units/view-measurement-units.component';
import { AddIngredientComponent } from './page/ingredient/add-ingredient/add-ingredient.component';
import { ViewIngredientComponent } from './page/ingredient/view-ingredient/view-ingredient.component';
import { ViewGenericComponent } from './page/generic/view-generic/view-generic.component';
import { AddGenericComponent } from './page/generic/add-generic/add-generic.component';
import { AddManufacturerComponent } from './page/manufacturer/add-manufacturer/add-manufacturer.component';
import { ViewManufacturerComponent } from './page/manufacturer/view-manufacturer/view-manufacturer.component';
import { ViewSubTherapeuticCategoryComponent } from './page/sub-therapeutic/view-sub-therapeutic-category/view-sub-therapeutic-category.component';
import { AddSubTherapeuticCategoryComponent } from './page/sub-therapeutic/add-sub-therapeutic-category/add-sub-therapeutic-category.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoryMasterComponent
  },
  {
    path:'add-therapeutic',
    pathMatch:'full',
    component:AddTherapeuticCategoryComponent
  },
  {
    path:'view-therapeutic',
    pathMatch:'full',
    component:ViewTherapeuticCategoryComponent
  },
  {
    path:'add-sub-therapeutic',
    pathMatch:'full',
    component:AddSubTherapeuticCategoryComponent
  },
  {
    path:'view-sub-therapeutic',
    pathMatch:'full',
    component:ViewSubTherapeuticCategoryComponent
  },
  {
    path:'add-product-master',
    pathMatch:'full',
    component:AddProductMasterComponent
  },
  {
    path:'view-product-master',
    pathMatch:'full',
    component:ViewProductMasterComponent
  },
  {
    path:'add-dosage-form',
    pathMatch:'full',
    component:AddDosageFormComponent
  },
  {
    path:'view-dosage-form',
    pathMatch:'full',
    component:ViewDosageFormComponent
  },
  {
    path:'add-measurement-units',
    pathMatch:'full',
    component:AddMeasurementUnitsComponent
  },
  {
    path:'view-measurement-units',
    pathMatch:'full',
    component:ViewMeasurementUnitsComponent
  },
  {
    path:'add-ingredient',
    pathMatch:'full',
    component:AddIngredientComponent
  },
  {
    path:'view-ingredient',
    pathMatch:'full',
    component:ViewIngredientComponent
  },
  {
    path:'add-generic',
    pathMatch:'full',
    component:AddGenericComponent
  },
  {
    path:'view-generic',
    pathMatch:'full',
    component:ViewGenericComponent
  },
  {
    path:'add-manufacturer',
    pathMatch:'full',
    component:AddManufacturerComponent
  },
  {
    path:'view-manufacturer',
    pathMatch:'full',
    component:ViewManufacturerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
