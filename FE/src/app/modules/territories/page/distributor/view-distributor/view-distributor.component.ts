import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IDistributor } from '../../../interfaces/idistributor';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.scss']
})
export class ViewDistributorComponent {

  txtSearch: string = '';
  distributorList:IDistributor [] = [];   
  page = 1;
	pageSize = 4;
	collectionSize:number;

  distributors:IDistributor [];

  constructor(private localStorageService:LocalStorageService, 
    private router:Router){
      this. getAllDistributors();
      this.collectionSize=this.distributorList.length;
      this.pagination();  
  }
  
	pagination() {   
		this.distributors = this.distributorList.map((page, i) => ({ id: i + 1, ...page })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);    
	}


  getAllDistributors(){       
    this.distributorList =  this.localStorageService.getObject("Distributor")
  }

  getMoreInfo(id:any){
    this.router.navigate(['home/territories/distributor-profile'],{queryParams:{id:id}});
  }


  onSearch(txtSearch:any): void {
    const searchTerm = this.txtSearch.trim().toLowerCase();   
    if (searchTerm) {
      this.distributors = this.distributorList.filter(a => 
        a.distributorName.toLowerCase().includes(searchTerm) ||
        a.ownerName.toLowerCase().includes(searchTerm) ||
        a.address.toLowerCase().includes(searchTerm) ||
        a.storesAddress.toLowerCase().includes(searchTerm) ||
        a.businessRegistrationNo.toLowerCase().includes(searchTerm) ||
        a.pharmacyLicenseNo.toLowerCase().includes(searchTerm) 
      );
    } else { 
      this.distributors = [...this.distributorList];
    }
  }

}
