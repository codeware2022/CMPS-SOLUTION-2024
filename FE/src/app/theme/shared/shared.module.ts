import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbModule, CardModule } from './components';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SpinnerComponent } from './components/spinner/spinner.component';

// bootstrap import
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeheadInputComponent } from './components/typehead-input/typehead-input.component';
import {
  NgTypeheadInputOptionTemplateDirective,
  NgTypeheadInputLabelTemplateDirective,
  NgSelectInputOptionTemplateDirective,
  NgSelectInputLabelTemplateDirective,
} from './directives/form-template.directive';
import { FilterPipe } from './Pipes/filter-pipe';
import { HttpClientModule } from '@angular/common/http';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TooltipComponent } from './components/modals/tooltip/tooltip.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    SpinnerComponent,
    TypeheadInputComponent,
    NgTypeheadInputOptionTemplateDirective,
    NgTypeheadInputLabelTemplateDirective,
    NgSelectInputOptionTemplateDirective,
    NgSelectInputLabelTemplateDirective,
    FilterPipe,
    ValidationMessagesComponent,
    NotificationComponent,
    DropdownComponent,
    TooltipComponent,
    ClickOutsideDirective,
    TypeaheadComponent,
    CustomInputComponent,
    PhotoUploadComponent,
    ColorPickerComponent,
    DateTimePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    NgbModule,
    NgScrollbarModule,
    HttpClientModule,
    NgApexchartsModule,
    ModalModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    NgxPaginationModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    BreadcrumbModule,
    SpinnerComponent,
    NgbModule,
    NgScrollbarModule,
    TypeheadInputComponent,
    FilterPipe,
    HttpClientModule,
    ValidationMessagesComponent,
    NotificationComponent,
    DropdownComponent,
    TooltipComponent,
    ClickOutsideDirective,
    NgApexchartsModule,
    TypeaheadComponent,
    CustomInputComponent,
    PhotoUploadComponent,
    ColorPickerComponent,
    DateTimePickerComponent,
    NgxPaginationModule
  ],
})
export class SharedModule {}
