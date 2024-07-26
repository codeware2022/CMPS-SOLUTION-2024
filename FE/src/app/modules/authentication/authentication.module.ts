import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,

  ],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule { }
