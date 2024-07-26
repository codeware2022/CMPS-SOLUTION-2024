import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit, OnChanges {
  @Input() items: any[] = [];
  @Input() searchItem: string = '';
  @Input() isRequired: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Output() selected = new EventEmitter<any>();
  filteredItems: any[] = [];
  selectedIndex: number = -1;
  showList: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
    this.control.valueChanges.subscribe((value) => {
      this.onSearch(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
      this.onSearch(this.control.value);
    }
  }

  onSearch(query: string): void {
    if (query) {
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
    } else {
      this.filteredItems = this.items;
    }

    this.selectedIndex = -1;
  }

  selectItem(item: any): void {
    this.control.setValue(item.name);
    this.selected.emit(item);
    this.showList = false;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }
}
