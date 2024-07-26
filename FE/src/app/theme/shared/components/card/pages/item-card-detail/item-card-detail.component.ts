import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-item-card-detail',
  templateUrl: './item-card-detail.component.html',
  styleUrls: ['./item-card-detail.component.scss']
})
export class ItemCardDetailComponent {
  @Input() isVisible = false;
  @Input() product: IProduct; // Input property to receive card data from parent component
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
