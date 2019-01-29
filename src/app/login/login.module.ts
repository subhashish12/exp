import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import { LoginRouting } from './login.routing';
import { ReactiveFormsModule } from "@angular/forms";
import {UserService} from '../../services/user.service';




@NgModule({
  imports: [
    CommonModule,LoginRouting,ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class LoginModule { }
