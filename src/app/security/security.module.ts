import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login/login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SecurityModule {
}
