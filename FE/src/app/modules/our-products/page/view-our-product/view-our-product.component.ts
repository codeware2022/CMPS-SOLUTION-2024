import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOurProduct, IProduct } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-view-our-product',
  templateUrl: './view-our-product.component.html',
  styleUrls: ['./view-our-product.component.scss'],
})
export class ViewOurProductComponent implements OnInit {
  ourProducts: IOurProduct[] = [];
  //filteredProducts: IOurProduct[] = [];
  searchTerm: string = '';
  page: number = 1; // current page

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.ourProducts = this.localStorageService.getObject('OurProducts');
    //this.filteredProducts = this.ourProducts;
  }

  formatIngredients(product: IOurProduct): string {
    if (product.ingredient !== null && product.ingredient != '') {
      const ingredients = JSON.parse(product.ingredient);
      return ingredients
        .map((ing) => `${ing.ingredient} (${ing.composition})`)
        .join(', ');
    } else {
      return '';
    }
  }

  get filteredProducts(): IOurProduct[] {
    if (!this.searchTerm) {
      return this.ourProducts;
    }
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    let products = this.ourProducts.filter(
      (product) =>
        product.productName?.toLowerCase()?.includes(lowerCaseTerm) ||
        false ||
        product.category?.toLowerCase()?.includes(lowerCaseTerm) ||
        false ||
        product.subcategory?.toLowerCase()?.includes(lowerCaseTerm) ||
        false ||
        product.genericName?.toLowerCase()?.includes(lowerCaseTerm) ||
        false ||
        product.manufacturer?.toLowerCase()?.includes(lowerCaseTerm) ||
        false,
    );
    return products;
  }

  addRandomProduct(product: IOurProduct) {
    console.log('Adding product:', product);
    this.router.navigateByUrl(`/home/our-product/add-marketing/${product.id}`);
  }

  viewProductProfile(id: number) {
    this.router.navigateByUrl(`/home/our-product/our-product-profile/${id}`);
  }
}
