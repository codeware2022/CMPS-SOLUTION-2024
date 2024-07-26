import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect-input',
  templateUrl: './multiselect-input.component.html',
  styleUrls: ['./multiselect-input.component.scss']
})

export class MultiselectInputComponent {
  @Input() options: string[];
  @Output() selectedOptionsChange = new EventEmitter<string[]>();
  @Input() selectedOptions: string[] = [];

  searchTerm: string = '';
  updateSelection(option: string) {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    } else {
      this.selectedOptions.push(option);
    }
    this.selectedOptionsChange.emit(this.selectedOptions);
  }
}
