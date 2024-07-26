import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  color: string = '#000000';

  @Output() colorChange = new EventEmitter<string>();

  onColorChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.color = inputElement.value;
    this.colorChange.emit(this.color);
  }
}
