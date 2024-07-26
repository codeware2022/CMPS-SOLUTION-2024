import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit{
  @Input() category : ICategory;
  @Output() cardClicked = new EventEmitter<number>();
  

  ngOnInit(): void {
    
  }

  onCardClick(cardId: number) {
    this.cardClicked.emit(cardId); // Emit the card ID
  }
}
