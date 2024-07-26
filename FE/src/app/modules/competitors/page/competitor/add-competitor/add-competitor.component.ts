import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { CompetitorDto } from './competitor-dto';

@Component({
  selector: 'app-add-competitor',
  templateUrl: './add-competitor.component.html',
  styleUrls: ['./add-competitor.component.scss']
})
export class AddCompetitorComponent {

  competitorForm: FormGroup;
  competitor:CompetitorDto [] = [];
  
  constructor(public formBuilder : FormBuilder, public localStorageService: LocalStorageService){
    this.initializeForm();
  }

  initializeForm(){
    this.competitorForm = this.formBuilder.group({
      competitorName : [null,Validators.required], 
      email : [null,Validators.required], 
      contactNo : [null,Validators.required],      
      remarks : [null, Validators.required]
    });
  }

  onCompetitorNameChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const competitorName: string = $event;
      this.competitorForm.patchValue({
        competitorName : competitorName,
      });
    }       
  }
  
  onCompetitorEmailChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const email: string = $event;
      this.competitorForm.patchValue({
        email : email,
      });
    }       
  }
  
  onContactNoChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const contactNo: string = $event;
      this.competitorForm.patchValue({
        contactNo : contactNo,
      });
    }       
  }

  onRemarksChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const remarks: string = $event;
      this.competitorForm.patchValue({
        remarks : remarks,
      });
    } 
  }

  AddCompetitor(){
    console.log(this.competitorForm.value);   
    this.competitor.push({
      id: this.competitor.length + 1,
      competitorName:this.competitorForm.value.competitorName,
      email:this.competitorForm.value.email,
      contactNo:this.competitorForm.value.contactNo,
      remarks:this.competitorForm.value.remarks,
  });
    this.localStorageService.setObject('Competitor', this.competitor);
  }

}
