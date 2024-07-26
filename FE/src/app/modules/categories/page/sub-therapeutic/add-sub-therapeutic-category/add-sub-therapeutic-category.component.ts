import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory, ISubCategory } from 'src/app/theme/shared/models/Item';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-add-sub-therapeutic-category',
  templateUrl: './add-sub-therapeutic-category.component.html',
  styleUrls: ['./add-sub-therapeutic-category.component.scss']
})
export class AddSubTherapeuticCategoryComponent {
  subTherapeuticCategoryForm : FormGroup;
  subcategories: ISubCategory[] = [];
  categories: ICategory[] = [];  

  constructor(private formBuilder : FormBuilder){
    this.initializeForm();
  }
  
  initializeForm(){
    this.subTherapeuticCategoryForm = this.formBuilder.group({
      therapeuticCategoryId : [null,Validators.required],
      subtTherapeuticCategoryName : [null,Validators.required],
      remarks:[null]
    });
  }

  onTherapeuticCategorySelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedCategory: ICategory = $event;

      this.subTherapeuticCategoryForm.patchValue({
        category: selectedCategory.name,
      });

      if (selectedCategory.subcategories &&selectedCategory.subcategories.length > 0){
        this.subcategories = selectedCategory.subcategories;
      } 
    }
  }

  onSubTherapeuticCategoryChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const subTherapeuticCategoryName: string = $event;
      this.subTherapeuticCategoryForm.patchValue({
        subtTherapeuticCategoryName : subTherapeuticCategoryName,
      });
    }       
  }
  
  onRemarksChange($event: any) {
    if ($event && !($event instanceof Event)) {
      const remarks: string = $event;
      this.subTherapeuticCategoryForm.patchValue({
        remarks : remarks,
      });
    } 
  }
}
