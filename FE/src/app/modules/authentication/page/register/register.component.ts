import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/theme/shared/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showModal: boolean = false;
  isSuccess: boolean = false;
  notificationTitle = "";
  notificationMessage = "";
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];


  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router, private sharedService: SharedService) {
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  register() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.sharedService.showNotification(true, res.value.title, res.value.message);
          this.router.navigateByUrl('/auth/login');
        },
        error: error => {

          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {
            this.errorMessages.push(error.error);
          }
        }
      })
    }
  }
}
