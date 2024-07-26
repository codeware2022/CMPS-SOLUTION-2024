import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBrand } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-view-product-master',
  templateUrl: './view-product-master.component.html',
  styleUrls: ['./view-product-master.component.scss'],
})
export class ViewProductMasterComponent implements OnInit {
  productBrands: IBrand[] = [];
  searchTerm: string = '';
  page: number = 1; // current page

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productBrands = this.localStorageService.getObject('Brands');
  }

  get filteredBrands(): IBrand[] {
    if (!this.searchTerm) {
      return this.productBrands;
    }
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    let brands = this.productBrands.filter(
      (brand) => brand.name?.toLowerCase()?.includes(lowerCaseTerm) || false,
    );
    return brands;
  }

}
