import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IBrand,
  ICategory,
  IOurProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-product-master',
  templateUrl: './add-product-master.component.html',
  styleUrls: ['./add-product-master.component.scss'],
})
export class AddProductMasterComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  productsForm: FormGroup;
  selectedCategory: string;
  categories: ICategory[] = [];
  subcategories: ISubCategory[] = [];
  productBrands: IBrand[] = [];

  brandId: number = 0;

  public genericNameList = [
    { id: 1, name: 'alendronate' },
    { id: 2, name: 'bupropion ' },
    { id: 3, name: 'chlordiazepoxide' },
    { id: 4, name: 'cholestyramine' },
    { id: 5, name: 'fluconazole' },
    { id: 6, name: 'guanfacine' },
  ];
  public manufacturerList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];

  public dosageFormList: any[] = [
    { id: 1, name: 'Solid' },
    { id: 2, name: 'Semi-solid' },
    { id: 3, name: 'Liquid' },
    { id: 4, name: 'Gas' },
  ];
  public distributorList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];
  public ingredientList = [
    { id: 1, name: 'Remeron' },
    { id: 2, name: 'Antivert ' },
    { id: 3, name: 'Cytomel' },
    { id: 4, name: 'Prevacid' },
    { id: 5, name: 'Hydrocortisone ' },
    { id: 6, name: 'Septra ' },
  ];

  constructor(
    public fromBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
  ) {
    this.initializeForm();
  }
  ngOnInit(): void {
    this.categories = this.localStorageService.getObject('categories');
    if (
      this.localStorageService.getObject('Brands') != null ||
      this.localStorageService.getObject('Brands').length > 0
    ) {
      this.productBrands = this.localStorageService.getObject('Brands');
      this.brandId = this.localStorageService.getObject('Brands').length;
    }
  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group({
      name: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null],
      manufacturer: [null, Validators.required],
      distributor: [null],
    });
  }

  get f() {
    return this.productsForm.controls;
  }

  onBrandNameChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const brandName: string = $event;
      this.productsForm.patchValue({
        name: brandName,
      });
    }
  }

  onDistributerEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const distributer: string = $event;
      this.productsForm.patchValue({
        composition: distributer,
      });
    }
  }

  onCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedCategory: ICategory = $event;

      this.productsForm.patchValue({
        category: selectedCategory.name,
      });

      if (
        selectedCategory.subcategories &&
        selectedCategory.subcategories.length > 0
      ) {
        this.subcategories = selectedCategory.subcategories;
      }
    }
  }

  onSubCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedSubCategory: ISubCategory = $event;

      this.productsForm.patchValue({
        subcategory: selectedSubCategory.name,
      });
    }
  }

  onManufacturerSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedManufacturer: any = $event;

      this.productsForm.patchValue({
        manufacturer: selectedManufacturer.name,
      });
    }
  }

  onReset() {
    this.productsForm.reset();
  }

  onSubmit() {
    this.productBrands.push({
      ...this.productsForm.value,
      id: this.brandId + 1,
    });

    this.localStorageService
      .setObject('Brands', this.productBrands)
      .subscribe((status: boolean) => {
        if (status) {
          this.displayMessage('success', 'Data submitted successfully!');
          this.onReset();
        } else {
          this.displayMessage('error', 'Failed to submit data!');
        }
      });
  }

  private displayMessage(type: string, message: string) {
    if (type === 'success') {
      this.successMessage = message;
      this.errorMessage = null;
    } else if (type === 'error') {
      this.errorMessage = message;
      this.successMessage = null;
    }

    setTimeout(() => {
      this.successMessage = null;
      this.errorMessage = null;
    }, 3000); // Message will disappear after 3 seconds
  }
}
