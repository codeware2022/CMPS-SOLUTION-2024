import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { ICategory, ISubCategory } from 'src/app/theme/shared/models/Item';

@Component({
  selector: 'app-product-category-icon',
  templateUrl: './product-category-icon.component.html',
  styleUrls: ['./product-category-icon.component.scss'],
})
export class ProductCategoryIconComponent implements OnInit {
  @Input() category: ICategory;
  subCategories: ISubCategory[];
  @Output() subCategorySelected = new EventEmitter<ISubCategory>();
  @Output() categoryClicked = new EventEmitter<ICategory>();
  @Input() isDropdownVisible: boolean = false;
  @Output() mouseEnter = new EventEmitter<void>();
  @Output() clickOutside = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  onSubCategorySelect(item: ISubCategory) {
    this.subCategorySelected.emit(item);
    this.onClickOutside(); // to close the dropdown
  }

  onClickCategory() {
    if (this.category.subcategories.length == 0) {
      this.categoryClicked.emit(this.category);
    }
  }

  onMouseEnter() {
    this.mouseEnter.emit();
  }

  onClickOutside() {
    this.clickOutside.emit();
  }
}
