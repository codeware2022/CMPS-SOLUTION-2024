import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent {
  previewUrls: (string | ArrayBuffer | null)[] = [];
  errorMessage: string | null = null;
  @Input() isRequired: boolean = false;

  @Output() photoSelected = new EventEmitter<string | ArrayBuffer | null>();

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      const remainingSlots = 5 - this.previewUrls.length;
      const selectedFiles = files.slice(0, remainingSlots);

      if (selectedFiles.length === 0) {
        this.errorMessage = 'You can only add up to 5 photos.';
        return;
      }

      this.errorMessage = null;

      selectedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          this.previewUrls.push(result);
          this.photoSelected.emit(result);
        };
        reader.onerror = () => {
          this.errorMessage = 'Error loading the file. Please try again.';
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removePhoto(index: number): void {
    this.previewUrls.splice(index, 1);
  }
}
