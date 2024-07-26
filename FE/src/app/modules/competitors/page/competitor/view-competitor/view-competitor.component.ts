import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';
import { CompetitorDto } from '../add-competitor/competitor-dto';

@Component({
  selector: 'app-view-competitor',
  templateUrl: './view-competitor.component.html',
  styleUrls: ['./view-competitor.component.scss']
})
export class ViewCompetitorComponent {
  competitor:CompetitorDto [] = [];
  page = 1;
	pageSize = 4;
	collectionSize:number;
  
	competitors:CompetitorDto [];

	constructor(private localStorageService: LocalStorageService ) {
    this.getDataFromLocalDB();  
    this.collectionSize=this.competitor.length;
    this.refreshCountries();  
	}

	refreshCountries() {   
		this.competitors = this.competitor.map((page, i) => ({ id: i + 1, ...page })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
    console.log(this.competitors);    
	}

  getDataFromLocalDB(){
    this.competitor = this.localStorageService.getObject('Competitor');
  }
}
