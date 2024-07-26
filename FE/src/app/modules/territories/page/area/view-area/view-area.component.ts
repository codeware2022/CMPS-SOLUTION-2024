import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IArea } from '../../../interfaces/i-area';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITown } from '../../../interfaces/itown';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.scss']
})
export class ViewAreaComponent {
  
  areaList:IArea[]=[];
  area:IArea[];
  page=1;
  pageSize=4;
  collectionSize:number;
  txtSearch:string="";
  xxx: number=0;

  selectedArea: IArea[] = [];
  selectedTown : ITown[]=[];

  constructor(private localStorageService:LocalStorageService, private modalService: NgbModal){
    this.getAllArea();
    this.collectionSize = this.areaList.length + 1;
    this.pagination();
  }


  openModal(id:any) {
    
    //this.xxx=id;  
    const selected = this.localStorageService.getObject('Area');   
    this.selectedArea = selected.filter(x => x.id === id);
    
    if (this.selectedArea.length > 0) {
        this.selectedTown = this.selectedArea[0].town;
    } 
    

    const modal = document.getElementById('townList');
    if (modal) {    
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('townList');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  getAllArea(){
    this.areaList = this.localStorageService.getObject('Area');
  }

  pagination(){
    this.area = this.areaList.map((page,i)=>({id: i + 1, ...page})).slice(
      (this.page-1) * this.pageSize,
      (this.page-1) * this.pageSize + this.pageSize,
    );
  }
  
  onSearch(txtSearch:any):void{       
    const searchTerm = txtSearch.trim().toLocaleLowerCase();      
    if(searchTerm){
      this.area = this.areaList.filter(t=>t.areaName.toLocaleLowerCase().includes(searchTerm));
    }
    else{
      this.area = [...this.area];
    }
  }
}
