// core
import {
  Component,
  Input,
  Self,
  EventEmitter,
  Output,
  ContentChild,
  TemplateRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { concat, Observable, of, Subject } from 'rxjs';
// import { DeviceDetectorService } from 'ngx-device-detector';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
//import { NgSelectComponent } from '@ng-select/ng-select';

// directives
import {
  NgTypeheadInputOptionTemplateDirective,
  NgTypeheadInputLabelTemplateDirective,
} from '../../directives/form-template.directive';


// schemas
import { IFormCustomClass } from 'src/app/data/schema/generic/form';

@Component({
  selector: 'app-typehead-input',
  templateUrl: './typehead-input.component.html',
  styleUrls: ['./typehead-input.component.scss']
})
export class TypeheadInputComponent implements ControlValueAccessor, OnInit {
  //@ViewChild('select') select: NgSelectComponent;
  public deviceInfo = null;
  public isDesktopDevice = true;
  public isTablet;
  public selectedItems;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() list: any[];
  @Input() list$: Observable<any[]>;
  @Input() labelField: string;
  @Input() bindField: string;
  @Input() addTagCallback: Function;
  @Input() addTag = true;
  @Input() clearable = true;
  @Input() virtualScroll = false;
  @Input() selectableGroup = false;
  @Input() customClasses: IFormCustomClass = {
    formGroup: 'form-group',
    label: 'font-weight-bold text-muted small mb-0',
    input: '',
  };
  @Input() searchFields: string[] = [];
  @Input() enableServerSideSearch = false;
  @Input() isMultiple = false;
  @Input() serverSideSearchCallback: (searchTerm: any) => Observable<any[]>;

  @Output() onTypeheadSelect = new EventEmitter();
  @Output() onTypeheadClear = new EventEmitter();

  addTagEnabled = false;
  loading = false;
  searchInput$ = new Subject<string>();

  // custom templates
  @ContentChild(NgTypeheadInputOptionTemplateDirective, { read: TemplateRef }) optionTemplate: TemplateRef<any>;
  @ContentChild(NgTypeheadInputLabelTemplateDirective, { read: TemplateRef }) labelTemplate: TemplateRef<any>;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    //this.deviceDetector();
  }

  ngOnInit() {
    if (this.enableServerSideSearch) {
      this.customSearchServerSideFn();
    }
  }

  // deviceDetector() {
  //   this.isDesktopDevice = this.deviceService.isDesktop();
  // }

  writeValue(obj: any): void { }

  registerOnChange(fn: any): void { }

  registerOnTouched(fn: any): void { }

  addTagPromise = (name) => {
    return new Promise((resolve) => {
      this.loading = true;

      this.addTagCallback(name).subscribe(
        (res) => {
          resolve(res);
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        },
      );
    });
  };

  onChange($event: any) {
    this.onTypeheadSelect.emit($event);
  }

  onClear() {
    this.onTypeheadClear.emit();
  }

  customSearchFn = (term: string, item: any) => {
    term = term.toLowerCase();

    // TODO: REMOVE OLDER SEARCH FUNC AFTER STG PASS
    // if (this.searchFields.length > 0) {
    //     return this.searchFields.some((field) => item[field].toLowerCase().indexOf(term) > -1);
    // }

    // return item[this.labelField].toLowerCase().indexOf(term) > -1;

    // creating and array of space separated term and removing the empty values using filter
    const splitTerms = term.split(' ').filter((t) => t);

    const searchedItems = [];

    // pushing true/false if match is found
    if (this.searchFields.length > 0) {
      splitTerms.forEach((st) => {
        let found = false;
        this.searchFields.forEach((field) => {
          const search = item[field] ? item[field].toLowerCase() : '';

          if (!found) {
            found = search.indexOf(st) !== -1;
          }
        });

        searchedItems.push(found);
      });
    } else {
      splitTerms.forEach((st) => {
        const search = item[this.labelField].toLowerCase();
        searchedItems.push(search.indexOf(st) !== -1);
      });
    }

    const all_words = (this_word) => this_word;

    // every method will return true if all values are true in searchedItems.
    return searchedItems.every(all_words);
  };

  customSearchServerSideFn() {
    this.list$ = concat(
      of([]), // default items
      this.searchInput$.pipe(
        distinctUntilChanged(),
        tap(() => (this.loading = true)),
        // filter((term) => !!term),
        switchMap((term) =>
          term
            ? this.serverSideSearchCallback(term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => (this.loading = false)),
            )
            : of([]).pipe(tap(() => (this.loading = false))),
        ),
      ),
    );
  }









}
