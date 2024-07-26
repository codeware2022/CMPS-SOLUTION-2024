import { Component } from '@angular/core';
import {TherapeuticCategoryDto} from '../therapeutic-category-dto';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-view-therapeutic-category',
  templateUrl: './view-therapeutic-category.component.html',
  styleUrls: ['./view-therapeutic-category.component.scss']
})
export class ViewTherapeuticCategoryComponent {
  theroputic:TherapeuticCategoryDto [] = [];
  page = 1;
	pageSize = 4;
	collectionSize:number;
  
	countries:TherapeuticCategoryDto [];

	constructor(private localStorageService: LocalStorageService ) {
    this.getDataFromLocalDB();  
    this.collectionSize=this.theroputic.length;
    this.refreshCountries();  
	}

	refreshCountries() {   
		this.countries = this.theroputic.map((page, i) => ({ id: i + 1, ...page })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
    console.log(this.countries);    
	}

  getDataFromLocalDB(){
    this.theroputic = this.localStorageService.getObject('TherapeuticCategory');
    //console.log(this.theroputic);    
  }

}
