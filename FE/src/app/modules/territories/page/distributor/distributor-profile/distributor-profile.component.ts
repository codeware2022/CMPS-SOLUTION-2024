import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { IDistributor } from '../../../interfaces/idistributor';

@Component({
  selector: 'app-distributor-profile',
  templateUrl: './distributor-profile.component.html',
  styleUrls: ['./distributor-profile.component.scss']
})
export class DistributorProfileComponent {

  id:number;
  distributor : IDistributor[] = [];
  selectedDistributor:any;
  constructor(private localStorageService:LocalStorageService,
    private route:ActivatedRoute){
    this.route.queryParams.subscribe(param=>{
      this.id = param['id'];
      console.log(this.id);      
    });
    this.getMoreInfo(this.id);
  }

  getMoreInfo(id:any){    
    this.distributor = this.localStorageService.getObject('Distributor') || [];   
    this.selectedDistributor = this.distributor.find(d=>d.id=this.id);
  }
}
