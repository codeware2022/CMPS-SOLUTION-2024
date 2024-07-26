import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { ITown } from '../../../interfaces/itown';

@Component({
  selector: 'app-view-town',
  templateUrl: './view-town.component.html',
  styleUrls: ['./view-town.component.scss']
})
export class ViewTownComponent {

  townList:ITown[]=[];
  towns:ITown[];
  page=1;
  pageSize=4;
  collectionSize:number;
  txtSearch:string='';

  constructor(private localStorageService:LocalStorageService){
    this.getAllTown();
    this.collectionSize = this.townList.length + 1;
    this.pagination();
  }

  pagination(){
    this.towns = this.townList.map((page,i)=>({id: i + 1, ...page})).slice(
      (this.page-1) * this.pageSize,
      (this.page-1) * this.pageSize + this.pageSize,
    );
  }

  getAllTown(){
    this.townList = this.localStorageService.getObject('Town');
  }

  onSearch(txtSearch:any):void{       
    const searchTerm = txtSearch.trim().toLocaleLowerCase();      
    if(searchTerm){
      this.towns = this.townList.filter(t=>t.townName.toLocaleLowerCase().includes(searchTerm));
    }
    else{
      this.towns = [...this.towns];
    }
  }
}
