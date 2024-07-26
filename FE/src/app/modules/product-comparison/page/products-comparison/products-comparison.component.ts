import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-products-comparison',
  templateUrl: './products-comparison.component.html',
  styleUrls: ['./products-comparison.component.scss']
})
export class ProductsComparisonComponent {
  @Input() item : IProduct;
  imagePathLocal = 'assets/images/products/Lowpress.jpg';
  imagePathCompetitor = 'assets/images/products/Losacar.jfif';
  progress: 20;
  
}

