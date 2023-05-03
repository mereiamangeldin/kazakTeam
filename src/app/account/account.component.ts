import { Component } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements CanActivate {
  Authorized: boolean;
  constructor(private router: Router, private authService: AuthService){
    this.Authorized = false;
  }
  canActivate() {
    alert(1)
    if (this.Authorized) {
        return true;
    }

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.router.navigate(["login"])
  });
    return false;
}
  logout(){
    this.authService.logout()
    this.router.navigate(['../login'])
  }
}
