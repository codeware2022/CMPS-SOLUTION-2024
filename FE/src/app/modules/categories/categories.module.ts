import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryMasterComponent } from './page/category-master/category-master.component';
import { CategoryCardComponent } from './page/category-card/category-card.component';
import { ViewSubTherapeuticCategoryComponent } from './page/sub-therapeutic/view-sub-therapeutic-category/view-sub-therapeutic-category.component';
import { ViewTherapeuticCategoryComponent } from './page/therapeutic/view-therapeutic-category/view-therapeutic-category.component';
import { AddProductMasterComponent } from './page/product-master/add-product-master/add-product-master.component';
import { ViewProductMasterComponent } from './page/product-master/view-product-master/view-product-master.component';

import { ViewDosageFormComponent } from './page/dosage-form/view-dosage-form/view-dosage-form.component';
import { ViewMeasurementUnitsComponent } from './page/measurement-units/view-measurement-units/view-measurement-units.component';
import { AddIngredientComponent } from './page/ingredient/add-ingredient/add-ingredient.component';
import { ViewIngredientComponent } from './page/ingredient/view-ingredient/view-ingredient.component';
import { AddGenericComponent } from './page/generic/add-generic/add-generic.component';
import { ViewGenericComponent } from './page/generic/view-generic/view-generic.component';
import { AddManufacturerComponent } from './page/manufacturer/add-manufacturer/add-manufacturer.component';
import { ViewManufacturerComponent } from './page/manufacturer/view-manufacturer/view-manufacturer.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CardModule } from 'src/app/theme/shared/components';
import { AddTherapeuticCategoryComponent } from './page/therapeutic/add-therapeutic-category/add-therapeutic-category.component';
import { AddSubTherapeuticCategoryComponent } from './page/sub-therapeutic/add-sub-therapeutic-category/add-sub-therapeutic-category.component';


@NgModule({
  declarations: [
    CategoryMasterComponent,
    CategoryCardComponent,
    AddTherapeuticCategoryComponent,
    ViewTherapeuticCategoryComponent,    
    ViewSubTherapeuticCategoryComponent,   
    AddProductMasterComponent,
    ViewProductMasterComponent,
    ViewDosageFormComponent,
    ViewMeasurementUnitsComponent,
    AddIngredientComponent,
    ViewIngredientComponent,
    AddGenericComponent,
    ViewGenericComponent,
    AddManufacturerComponent,
    ViewManufacturerComponent,
    AddSubTherapeuticCategoryComponent,    
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    CardModule
  ]
})
export class CategoriesModule { }
