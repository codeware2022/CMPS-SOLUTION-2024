import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item : IProduct;
  @Output() productCardClicked = new EventEmitter<any>();
  isModalVisible = false;

  constructor(private router: Router) {}

  onCardClick() {
    this.productCardClicked.emit(this.item);
  }

 
}
