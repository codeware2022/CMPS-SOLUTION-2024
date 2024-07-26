import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/Item';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  dropdownOpen = false;
  @Input() items: any[] = [];
  @Input() firstOptionText = "";
  @Output() itemSelected = new EventEmitter<number>();

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onItemSelect(item: any) {
    console.log('Selected item:', item);
    this.itemSelected.emit(item.id); 
    this.dropdownOpen = false;
  }
}
