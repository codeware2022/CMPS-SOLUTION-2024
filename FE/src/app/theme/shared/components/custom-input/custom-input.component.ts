import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() inputId: string = 'custom-input';
  @Input() value: string = '';
  @Input() isRequired: boolean = false;
  @Input() isTextArea: boolean = false;
  @Input() control: FormControl = new FormControl(); // Accepting FormControl as input
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(): void {
    this.valueChange.emit(this.value);
  }
}
