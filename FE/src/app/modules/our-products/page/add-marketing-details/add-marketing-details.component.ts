import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { updateLocale } from 'moment';
import { IMarketDetail, IOurProduct } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-marketing-details',
  templateUrl: './add-marketing-details.component.html',
  styleUrls: ['./add-marketing-details.component.scss'],
})
export class AddMarketingDetailsComponent implements OnInit {
  productMarketingForm: FormGroup;
  savedPhotos: (string | ArrayBuffer | null)[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  product: IOurProduct;
  marketDetail: IMarketDetail;

  public availability: any[] = [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Not Available' },
  ];
  date: string;
  constructor(
    public fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
  ) {
    this.initializeForm();
    const now = new Date();
    this.date = now.toISOString().substring(0, 10);
  }
  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    this.patchFormInitially();
  }
  initializeForm() {
    this.productMarketingForm = this.fromBuilder.group({
      productId: [{ value: null, disabled: true }, Validators.required],
      productName: [{ value: null, disabled: true }, Validators.required],
      brandName: [{ value: null, disabled: true }, Validators.required],
      updatedDate: [null, Validators.required],
      enterDate: [null, Validators.required],
      bonusFreeIssues: [null],
      marketLeader: [null, Validators.required],
      marketShare: [null, Validators.required],
      avgSalesQty: [null, Validators.required],
      wholeSalePrice: [null, Validators.required],
      retailPrice: [null, Validators.required],
      wholeSaleCustomerPrice: [null, Validators.required],
      retailPricePatient: [null, Validators.required],
      dateManufacture: [null, Validators.required],
      dateExpire: [null, Validators.required],
      batchNo: [null, Validators.required],
      IMS: [null, Validators.required],
      availability: [null, Validators.required],
      photos: [null],
      giveAways: [null],
      tieUpSponsor: [null],
      remarks: [null],
    });
  }

  patchFormInitially() {
    this.productMarketingForm.patchValue({
      productId: this.product.id,
      productName: this.product.productName,
      brandName: this.product.brandName,
      updatedDate: this.date,
      enterDate: this.date,
      dateManufacture: this.date,
      dateExpire: this.date,
    });
  }

  onBonusFreeIssuesChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const bonusFreeIssues: string = $event;
      this.productMarketingForm.patchValue({
        bonusFreeIssues: bonusFreeIssues,
      });
    }
  }

  onMarketLeaderChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const marketLeader: string = $event;
      this.productMarketingForm.patchValue({
        marketLeader: marketLeader,
      });
    }
  }

  onMarketShareChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const marketShare: string = $event;
      this.productMarketingForm.patchValue({
        marketShare: marketShare,
      });
    }
  }

  onAvgSalesQtyChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const avgSalesQty: string = $event;
      this.productMarketingForm.patchValue({
        avgSalesQty: avgSalesQty,
      });
    }
  }

  onWholeSalePriceChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const wholeSalePrice: string = $event;
      this.productMarketingForm.patchValue({
        wholeSalePrice: wholeSalePrice,
      });
    }
  }

  onRetailPriceChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const retailPrice: string = $event;
      this.productMarketingForm.patchValue({
        retailPrice: retailPrice,
      });
    }
  }

  onWholeSaleCustomerPriceChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const wholeSaleCustomerPrice: string = $event;
      this.productMarketingForm.patchValue({
        wholeSaleCustomerPrice: wholeSaleCustomerPrice,
      });
    }
  }

  onRetailPricePatientChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const retailPricePatient: string = $event;
      this.productMarketingForm.patchValue({
        retailPricePatient: retailPricePatient,
      });
    }
  }

  onBatchNoChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const batchNo: string = $event;
      this.productMarketingForm.patchValue({
        batchNo: batchNo,
      });
    }
  }

  onIMSChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const IMS: string = $event;
      this.productMarketingForm.patchValue({
        IMS: IMS,
      });
    }
  }

  onAvailabilityChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const availability: any = $event;
      this.productMarketingForm.patchValue({
        availability: availability.name,
      });
    }
  }

  onGiveAwaysChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const giveAways: string = $event;
      this.productMarketingForm.patchValue({
        giveAways: giveAways,
      });
    }
  }

  onTieUpSponsorChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const tieUpSponsor: string = $event;
      this.productMarketingForm.patchValue({
        tieUpSponsor: tieUpSponsor,
      });
    }
  }

  onRemarksChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const remarks: string = $event;
      this.productMarketingForm.patchValue({
        remarks: remarks,
      });
    }
  }

  onPhotoSelected(photo: string | ArrayBuffer | null): void {
    if (photo) {
      this.savedPhotos.push(photo);
      this.productMarketingForm.patchValue({
        photos: this.savedPhotos,
      });
    }
  }

  onUpdatedDateSelected(selectedDate: string) {
    this.productMarketingForm.patchValue({
      updatedDate: selectedDate,
    });
  }

  onEnterDateSelected(selectedDate: string) {
    this.productMarketingForm.patchValue({
      enterDate: selectedDate,
    });
  }

  onDateManufactureSelected(selectedDate: string) {
    this.productMarketingForm.patchValue({
      dateManufacture: selectedDate,
    });
  }

  onDateExpireSelected(selectedDate: string) {
    this.productMarketingForm.patchValue({
      dateExpire: selectedDate,
    });
  }

  onSubmit() {
    this.localStorageService
      .setObject('MarketingDetails', this.productMarketingForm.value)
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

  onReset() {}
}
