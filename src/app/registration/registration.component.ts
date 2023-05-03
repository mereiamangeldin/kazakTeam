import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

export interface NewUser{
  name: string,
  surname: string,
  username: string,
  password: string
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: NewUser;
  pass1: string;
  pass2: string;
  passError: boolean;
  constructor(private authService: AuthService) {
    this.user = {name: "", surname:"", username: "", password: ""};
    this.pass1 = "";
    this.pass2 = "";
    this.passError = false;
  }

  register(){
    if(this.pass1 != this.pass2){
      this.passError = true;
      return;
    }
    this.user.password = this.pass1;
    this.authService.register(this.user);
    }
}
