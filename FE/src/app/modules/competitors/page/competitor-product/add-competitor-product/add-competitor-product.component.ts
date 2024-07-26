import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-competitor-product',
  templateUrl: './add-competitor-product.component.html',
  styleUrls: ['./add-competitor-product.component.scss'],
})
export class AddCompetitorProductComponent {
  comProductForm: FormGroup;

  constructor(
    public fromBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.comProductForm = this.fromBuilder.group({
      brandName: [null, Validators.required],
      packSize: [null, Validators.required],
      wholeSalePrice: [null, Validators.required],
      retailPrice: [null, Validators.required],
      bonusFreeIssues: [null],
      batchNo: [null, Validators.required],
      photos: [null],
      dateManufacture: [null, Validators.required],
      dateExpiry: [null, Validators.required],
      IMS: [null, Validators.required],
    });
  }

  public brandNames = [
    { id: 1, name: 'alendronate' },
    { id: 2, name: 'bupropion ' },
    { id: 3, name: 'chlordiazepoxide' },
    { id: 4, name: 'cholestyramine' },
    { id: 5, name: 'fluconazole' },
    { id: 6, name: 'guanfacine' },
  ];

  onBrandNameSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedBrandName: any = $event;
      this.comProductForm.patchValue({
        brandName: selectedBrandName.name,
      });
    }
  }

  onPackSizeEnter($event: any) {
    if ($event && !($event instanceof Event)) {
      const packSize: string = $event;
      this.comProductForm.patchValue({
        packSize: packSize,
      });
    }
  }

  onWSPEnter($event: any)
  {
    if ($event && !($event instanceof Event)) {
      const wspValue: string = $event;
      this.comProductForm.patchValue({
        comWSP: wspValue,
      });
    }
  }

  onRetailPriceEnter($event: any){
    if ($event && !($event instanceof Event)) {
      const retailPrice: string = $event;
      this.comProductForm.patchValue({
        retailPrice: retailPrice,
      });
    }
  }

  onBonusFreeIssuesEnter($event: any){
    if ($event && !($event instanceof Event)) {
      const freeIssues: string = $event;
      this.comProductForm.patchValue({
        bonusFreeIssues: freeIssues,
      });
    }
  }

  onBatchNoEnter($event: any){
    if ($event && !($event instanceof Event)) {
      const batchNo: string = $event;
      this.comProductForm.patchValue({
        batchNo: batchNo,
      });
    }
  }
}
