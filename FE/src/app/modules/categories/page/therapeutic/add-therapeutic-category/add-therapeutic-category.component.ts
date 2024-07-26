import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { TherapeuticCategoryDto } from '../therapeutic-category-dto';

@Component({
  selector: 'app-add-therapeutic-category',
  templateUrl: './add-therapeutic-category.component.html',
  styleUrls: ['./add-therapeutic-category.component.scss']
})
export class AddTherapeuticCategoryComponent {

  TherapeuticCategoryForm: FormGroup;
  theroputicCategories:TherapeuticCategoryDto [] = [];
  
  constructor(public formBuilder : FormBuilder, public localStorage: LocalStorageService,
    private localStorageService : LocalStorageService
  ){
    this.initializeForm();
  }

  initializeForm(){
    this.TherapeuticCategoryForm = this.formBuilder.group({
      therapeuticCategoryName : [null,Validators.required],      
      remarks : [null, Validators.required]
    });
  }

  onTherapeuticCategoryChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const therapeuticCategoryName: string = $event;
      this.TherapeuticCategoryForm.patchValue({
        therapeuticCategoryName : therapeuticCategoryName,
      });
    }       
  }
  
  onRemarksChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const remarks: string = $event;
      this.TherapeuticCategoryForm.patchValue({
        remarks : remarks,
      });
    } 
  }

  AddTherapeuticCategory(){
    console.log(this.TherapeuticCategoryForm.value);   
    this.theroputicCategories.push({
      id: this.theroputicCategories.length + 1,
      therapeuticCategoryName:this.TherapeuticCategoryForm.value.therapeuticCategoryName,
      remarks:this.TherapeuticCategoryForm.value.remarks,
  });
    this.localStorageService.setObject('TherapeuticCategory', this.theroputicCategories);
  }
}
