import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IArea } from '../../../interfaces/i-area';
import { ITown } from '../../../interfaces/itown';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent {

  townListForTypeahead: { id: number, name: string }[] = [];
  addedTowns: { id: number,townId:number,townName:string}[] = [];
  addedTownList: { id: number,townId:number,townName:string}[] = [];
  townErrorMsg:string='';

  areaForm:FormGroup;
  area:IArea[]=[];
  townList:ITown[]=[]; 

  paginationTowns:{ id: number,townId:number,townName:string}[];

  messageStatus:boolean;
  message:string;

  page=1;
  pageSize=2;
  collectionSize:number;

  constructor(private localStorageService:LocalStorageService,
    private formBuilder:FormBuilder){
      this.initializeForm();
      this.getTownList();    
      this.getAddedTownToList();  
      this.collectionSize = this.townList.length + 1;
      this.pagination();
  }

  initializeForm(){
    this.areaForm= this.formBuilder.group({
      areaName:[null,Validators.required],
      population:[null],
      income : [null],
      noOfDoctors:[null],
      noOfChemist:[null],
      noOfGovHospitals:[null],
      noOfpvtHospitals:[null],
      noOfsemiGovHospitals:[null],
      remarks:[null],
      townId:[null],     
      townName:[null]
    });
  }


  /* Form Controlers*/
  onAreaNameEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const areaName:string = $event;
      this.areaForm.patchValue({
        areaName:areaName
      });
    }
  }
  onPopulationEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const population:string = $event;
      this.areaForm.patchValue({
        population:population
      });
    }
  }
  onIncomeEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const income:string = $event;
      this.areaForm.patchValue({
        income:income
      });
    }
  }
  onNoOfDoctorsEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const noOfDoctors:string = $event;
      this.areaForm.patchValue({
        noOfDoctors:noOfDoctors
      });
    }
  }
  onNoOfChemistEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const noOfChemist:string = $event;
      this.areaForm.patchValue({
        noOfChemist:noOfChemist
      });
    }
  }
  onNoOfGovHospitalsEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const noOfGovHospitals:string = $event;
      this.areaForm.patchValue({
        noOfGovHospitals:noOfGovHospitals
      });
    }
  }
  onNoOfpvtHospitalsEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const noOfpvtHospitals:string = $event;
      this.areaForm.patchValue({
        noOfpvtHospitals:noOfpvtHospitals
      });
    }
  }
  noOfSemiGovHospitalsEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const noOfsemiGovHospitals:number = $event;
      this.areaForm.patchValue({
        noOfsemiGovHospitals:noOfsemiGovHospitals
      });
    }
  }
  onRemarksEntered($event:any){
    if($event &&  !($event instanceof Event)){
      const remarks:string = $event;
      this.areaForm.patchValue({
        remarks:remarks
      });
    }
  }
  
  onTownSelected($event: any) {
    if ($event && !($event instanceof Event)) {
      const selectedTown: any = $event;
      this.areaForm.patchValue({
        townId: selectedTown.id,
        townName:selectedTown.name
      }); 
    }

  }
  /**End Form Controlers */

  onReset(){
    this.areaForm.reset();
  }

  addArea(){
    this.getAddedTownToList();
    this.area.push({
      id:this.area.length + 1,
      town:this.addedTownList,
      ...this.areaForm.value,
    });    
    console.log(this.area);    

    this.localStorageService.setObject('Area' , this.area).subscribe(
      (status:boolean)=>{        
        if(status){
          this.onReset();
          this.localStorageService.setObject('TownsForArea', JSON.stringify(null));
          this.pagination();                      
          this.messageStatus=true;
            this.message="Data Successfully Saved!";
        }
        else{
          this.messageStatus=false;
          this.message="Data Successfully Saved!";
        }
    });

  }

  getTownList() {
    this.townList = this.localStorageService.getObject('Town') || [];
    this.townList = this.townList.filter(a => a.townName);
    this.townListForTypeahead = this.townList.map(a => ({
      id: a.id,  
      name: a.townName
       
    }));
    console.log(this.townListForTypeahead);
  }

  addTownToList(){  

    const newTown = {
      id: this.addedTowns.length + 1,
      townId: this.areaForm.value.townId,
      townName: this.areaForm.value.townName
    };

    const storedTowns  = this.localStorageService.getObject('TownsForArea');

    if (!Array.isArray(storedTowns)) {
      this.addedTowns = [];
    } else {
      this.addedTowns = storedTowns;
    }

    if(this.addedTowns!=null){
    const townExists = this.addedTowns.some(t => t.townId === newTown.townId);
      if(townExists){
        this.townErrorMsg = "Town already exists in the list.";
      }
      else{
        this.addedTowns.push(newTown);
        this.localStorageService.setObject('TownsForArea',this.addedTowns).subscribe(
          (status:boolean)=>{
            if(status){
              console.log("Town Successfully Added to list");  
              this.townErrorMsg=null;
              this.pagination();      
            }
            else{
              console.log("Error while Adding Town");          
            }
        });
      }  
    }
  }

  getAddedTownToList(){    
    this.addedTownList = this.localStorageService.getObject("TownsForArea");
  }

  removeTownById(id:number){   
    this.addedTowns = this.localStorageService.getObject('TownsForArea');
    const townToRemove = this.addedTowns.filter(item=>item.townId!==id);
    console.log(townToRemove);
    
    this.localStorageService.setObject('TownsForArea',townToRemove).subscribe(
      (status:boolean)=>{
        if(status){          
          this.addedTowns = townToRemove;    
          this.townErrorMsg=null;
          //this.getAddedTownToList();       
          console.log("Town Successfully Deleted");  
          this.pagination();
        }
        else{
          console.log("Error while Adding Town");          
        }
    });    
  }

  removeTown(){
    this.localStorageService.setObject("TownsForArea",null);
  }

  pagination(){
    const storedTowns  = this.localStorageService.getObject('TownsForArea');
    if (!Array.isArray(storedTowns)) {
      this.addedTowns = [];
    } else {
      this.addedTowns = storedTowns;
    }
    this.paginationTowns = this.addedTowns.map((page,i)=>({id: i + 1, ...page})).slice(
      (this.page-1) * this.pageSize,
      (this.page-1) * this.pageSize + this.pageSize,
    );     
  }
}
