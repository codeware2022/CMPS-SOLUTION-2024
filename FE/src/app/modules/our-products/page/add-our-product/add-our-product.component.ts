import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IBrand,
  ICategory,
  IOurProduct,
  IProduct,
  ISubCategory,
} from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-our-product',
  templateUrl: './add-our-product.component.html',
  styleUrls: ['./add-our-product.component.scss'],
})
export class AddOurProductComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  productsForm: FormGroup;
  selectedProducts: any[] = [];
  selectedAvailability: any;
  selectedCategory: string;
  categories: ICategory[] = [];
  subcategories: ISubCategory[] = [];
  productList: IProduct[] = [];
  productBrands: IBrand[] = [];

  ourProducts: IOurProduct[] = [];
  productId = 0;

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
  public disdtributorList = [
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
    this.productBrands = this.localStorageService.getObject('Brands');

    if (
      this.localStorageService.getObject('OurProducts') != null ||
      this.localStorageService.getObject('OurProducts').length > 0
    ) {
      this.ourProducts = this.localStorageService.getObject('OurProducts');
      this.productId = this.localStorageService.getObject('OurProducts').length;
    }
  }

  initializeForm() {
    this.productsForm = this.fromBuilder.group({
      brandName: [null, Validators.required],
      productCode: [null, Validators.required],
      productName: [null, Validators.required],
      genericName: [null, Validators.required],
      manufacturer: [null],
      dosageForm: [null],
      composition: [null],
      swot: [null],
      distributor: [null],
      packSize: [null],
      IMS: [null],
      flavor: [null],
      color: [null],
      ingredient: [null],
      //photos: [null],
    });
  }

  get f() {
    return this.productsForm.controls;
  }

  onProductCodeChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const productCode: string = $event;
      this.productsForm.patchValue({
        productCode: productCode,
      });
    }
  }

  onProductNameChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const productName: string = $event;
      this.productsForm.patchValue({
        productName: productName,
      });
    }
  }

  onCompositionEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const composition: string = $event;
      this.productsForm.patchValue({
        composition: composition,
      });
    }
  }

  onDistributerSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedDistributor: any = $event;
      this.productsForm.patchValue({
        distributor: selectedDistributor.name,
      });
    }
  }

  onPackSizeEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const packSize: string = $event;
      this.productsForm.patchValue({
        packSize: packSize,
      });
    }
  }

  onFlavorEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const flavor: string = $event;
      this.productsForm.patchValue({
        flavor: flavor,
      });
    }
  }

  onColorEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const color: string = $event;
      this.productsForm.patchValue({
        color: color,
      });
    }
  }

  onColorChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const color: string = $event;
      debugger;
      this.productsForm.patchValue({
        color: color,
      });
    }
  }

  onIMSEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const IMS: string = $event;
      this.productsForm.patchValue({
        packSize: IMS,
      });
    }
  }

  onSwotEntered($event: any) {
    if ($event && !($event instanceof Event)) {
      const swot: string = $event;
      this.productsForm.patchValue({
        swot: swot,
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
      } else if (
        selectedCategory.products &&
        selectedCategory.products.length > 0
      ) {
        this.productList = selectedCategory.products;
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

  onProductSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedProduct: IProduct = $event;

      this.productsForm.patchValue({
        productMasterName: selectedProduct.name,
      });
    }
  }

  onGenericNameSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedGenericName: any = $event;
      this.productsForm.patchValue({
        genericName: selectedGenericName.name,
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

  onBrandNameSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedBrandName: any = $event;
      this.productsForm.patchValue({
        brandName: selectedBrandName.name,
      });
    }
  }

  onDosageFormSelect($event: any) {
    if ($event && !($event instanceof Event)) {
      const selecedDosageForm: any = $event;
      this.productsForm.patchValue({
        dosageForm: selecedDosageForm.name,
      });
    }
  }

  onIngredientAdded($event: any) {
    if ($event && !($event instanceof Event)) {
      debugger;
      const ingredientAdded: any = $event;
      this.productsForm.patchValue({
        ingredient: ingredientAdded,
      });
    }
  }

  onReset() {
    this.productsForm.reset();
  }

  onSubmit() {
    this.ourProducts.push({
      ...this.productsForm.value,
      id: this.productId + 1,
    });

    this.localStorageService
      .setObject('OurProducts', this.ourProducts)
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
