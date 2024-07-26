import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { ITown } from '../../../interfaces/itown';

@Component({
  selector: 'app-add-town',
  templateUrl: './add-town.component.html',
  styleUrls: ['./add-town.component.scss']
})
export class AddTownComponent {

  townForm:FormGroup;
  town:ITown[]=[];
  messageStatus:boolean;
  message:string;

  constructor(private localStorageService:LocalStorageService,private formBuilder:FormBuilder){
    this.initializeForm();
  }

  initializeForm(){
    this.townForm=this.formBuilder.group({
      townName:[null,Validators.required],
      remarks:[null]
    });
  }

  onTownNameEntered($event:any){
    if($event && !($event instanceof Event)){
      const townName :string = $event;
      this.townForm.patchValue({
        townName: townName
      });
    }
  }

  onRemarkEntered($event:any){
    if($event && !($event instanceof Event)){
      const remarks:string = $event;
      this.townForm.patchValue({
        remarks : remarks
      });
    }
  }

  onReset(){
    this.townForm.reset();
  }
  addTown(){
    this.town.push({
      id:this.town.length + 1,
      ...this.townForm.value});

      this.localStorageService.setObject('Town',this.town).subscribe(
        (status:boolean)=>{
          if(status){
            this.onReset();           
            this.messageStatus=status;
            this.message = "Data Successfully Saved!";
          }
          else{
            this.messageStatus=status;
            this.message = "Failed to save data!";
          }
      
      });

  }
}
