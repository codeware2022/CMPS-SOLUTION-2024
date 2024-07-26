import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemCardComponent } from './pages/item-card/item-card.component';
import { ItemCardDetailComponent } from './pages/item-card-detail/item-card-detail.component';
/*import {AnimationService, AnimatorModule} from 'css-animator';*/

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    /*AnimatorModule*/
  ],
  declarations: [CardComponent, ItemCardComponent, ItemCardDetailComponent],
  exports: [CardComponent,ItemCardComponent],
  providers: [
    /*AnimationService*/
  ],
})
export class CardModule {}
