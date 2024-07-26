import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IDistributor } from '../../../interfaces/idistributor';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.scss']
})
export class AddDistributorComponent implements OnInit {

  distributorForm: FormGroup;
  distributor : IDistributor[]=[];
  message:string;
  messageStatus : boolean = false;
  rowNo:number;
  
  constructor(private formBuilder:FormBuilder, private localStorageService:LocalStorageService){
    this.initializeForm();
  }
  ngOnInit(): void {
    console.log(this.messageStatus);
    
  }

  initializeForm(){
    this.distributorForm = this.formBuilder.group({
      distributorName: [null, Validators.required],
      ownerName:[null,Validators.required],     
      address: [null],
      storesAddress:[null],
      contactNo:[null,Validators.required],
      email:[null,Validators.required],
      businessRegistrationNo:[null,Validators.required],
      pharmacyLicenseNo:[null, Validators.required],
      remarks:[null]
    });
  };

  //#region "Form Input Properties"
  onDistributorNameEntered($event: any){
    if ($event && !($event instanceof Event)){
      const distributorName : String = $event;
      this.distributorForm.patchValue({
        distributorName : distributorName
      });
    };
  };

  onOwnerNameEntered($event: any){
    if($event && !($event instanceof Event)){
      const ownerName:string = $event;
      this.distributorForm.patchValue({
        ownerName : ownerName
      });
    }
  }

  onStoresAddressEntered($event){
    if($event && !($event instanceof Event)){
      const storesAddress:string = $event;
      this.distributorForm.patchValue({
        storesAddress : storesAddress
      });
    }
  }

  onBusinessRegistrationNoEntered($event){
     if($event && !($event instanceof Event)){
      const businessRegistrationNo:string = $event;
      this.distributorForm.patchValue({
        businessRegistrationNo:businessRegistrationNo
      });
     }
  }

  onPharmacyLicenseNo($event){
    if($event && !($event instanceof Event)){
      const pharmacyLicenseNo:string = $event;
      this.distributorForm.patchValue({
        pharmacyLicenseNo : pharmacyLicenseNo
      });
    }
  }

  onAddressEntered($event : any){
    if($event && !($event instanceof Event)){
      const address: string = $event;
      this.distributorForm.patchValue({
        address:address
      });
    };
  };

  OnContactNoEntered($event: any){
    if($event && !($event instanceof Event)){
        const contactNo:string  = $event;
        this.distributorForm.patchValue({
          contactNo : contactNo
        });
      };
  };

  onEmailEntered($event: any){
    if($event && !($event instanceof Event)){
      const email:string = $event;
      this.distributorForm.patchValue({
        email : email
      });
    };
  };

  onRemarksEntered($event: any){
    if($event && !($event instanceof Event)){
      const remarks:string = $event;
      this.distributorForm.patchValue({
        remarks:remarks
      });
    };
  };
//#endregion "Form Input Properties"
 
onReset(){
    this.distributorForm.reset();
  }

  addDistributor(){   
    
    this.distributor.push({
      id: this.distributor.length + 1,
      ...this.distributorForm.value});

    this.localStorageService.setObject('Distributor',this.distributor).subscribe(
      (status:boolean)=>{
        if(status){          
          this.onReset();
          this.messageStatus = status;
          this.message = "Data Successfully Saved!";
        }
        else{
          this.messageStatus = status;
          this.message = "Failed to save data!";
        }
    });

  }
}
