import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/app/theme/shared/components';

import { ProductsRoutingModule } from './product-comparison-routing.module';
import { ProductMasterComponent } from './page/product-master/product-master.component';
import { TypeheadInputComponent } from 'src/app/theme/shared/components/typehead-input/typehead-input.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ProductCardComponent } from './page/product-card/product-card.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductCategoryIconComponent } from './page/product-category-icon/product-category-icon.component';
import { ProductsComparisonComponent } from './page/products-comparison/products-comparison.component';
import { CompetitorProductsComponent } from './page/competitor-products/competitor-products.component';

@NgModule({
  declarations: [
    ProductMasterComponent,  
    ProductCardComponent,
    ProductDetailComponent,
    ProductCategoryIconComponent,
    ProductsComparisonComponent,
    CompetitorProductsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    SharedModule
  ]
})
export class ProductsModule { }
