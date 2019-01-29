import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private user:UserService) { }
  
  loginForm: FormGroup;
  ngOnInit() {

    this.loginForm = this.fb.group({
      "email": ['', Validators.email],
      "password": ['', Validators.required]
    })

    this.user.getlogin().subscribe(resp=>{
      console.log('response is ',resp);
    })
  }

  login(val){
    console.log('values are',val);
  }

}
