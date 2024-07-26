import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item : IProduct;
  isModalVisible = false;

  openPopup() {
    this.isModalVisible = true;
  }

  closePopup() {
    this.isModalVisible = false;
  }
}
