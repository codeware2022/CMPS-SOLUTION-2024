import { Component,Input, OnInit  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IArea } from 'src/app/modules/territories/interfaces/i-area';
import { ITown } from 'src/app/modules/territories/interfaces/itown';
import { LocalStorageService } from 'src/app/theme/shared/services/local-storage.service';

@Component({
  selector: 'app-area-town',
  templateUrl: './area-town.component.html',
  styleUrls: ['./area-town.component.scss']
})
export class AreaTownComponent{

  @Input() Towns:[]=[];

  selectedArea: IArea[] = [];
  selectedTown : ITown[]=[];

  constructor(public localStorageService:LocalStorageService,private modalService: NgbModal) {}

  closeModal() {
    const modal = document.getElementById('townList');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  getAreaTowns(areaId:number){    
    
    const selected = this.localStorageService.getObject('Area');   
    this.selectedArea = selected.filter(x => x.id === areaId);
    
    if (this.selectedArea.length > 0) {
        this.selectedTown = this.selectedArea[0].town;
    }    
  }

  deleteTown(){

  }
}
