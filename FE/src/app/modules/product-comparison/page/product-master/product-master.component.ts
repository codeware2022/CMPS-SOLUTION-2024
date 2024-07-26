import { Component, Input, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ICategory,
  ICompetitorProduct,
  IProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.scss'],
})
export class ProductMasterComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: ICategory[] = [];
  subCategoriesAll: ISubCategory[] = [];
  subCategories: ISubCategory[] = [];
  competitorProducts: ICompetitorProduct[] = [];

  currentPage = 1;
  itemsPerPage = 8;

  currentPageProducts = 1;
  itemsPerPageProducts = 5;

  visibleDropdownIndex: number | null = null;

  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.categories = this.localStorageService.getObject('categories'); 
  }

  handleCategorySelect(category: ICategory) {
    this.filteredProducts = category.products;
    this.competitorProducts = [];
  }

  handleSubCategorySelected(subCategory: ISubCategory) {
    this.filteredProducts = subCategory.products;
    this.competitorProducts = [];
  }

  handleProductCardClicked(product: IProduct) {
    this.competitorProducts = product.competitorProducts;
  }

  get paginatedCategories() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.categories.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  totalPages() {
    return Math.ceil(this.categories.length / this.itemsPerPage);
  }

  get paginatedProducts() {
    const startIndex =
      (this.currentPageProducts - 1) * this.itemsPerPageProducts;
    const endIndex = startIndex + this.itemsPerPageProducts;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  changePageProducts(page: number) {
    this.currentPageProducts = page;
  }

  totalPagesProducts() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPageProducts);
  }

  showDropdown(index: number) {
    this.visibleDropdownIndex = index;
  }

  hideDropdown(index: number) {
    if (this.visibleDropdownIndex === index) {
      this.visibleDropdownIndex = null;
    }
  }
}
