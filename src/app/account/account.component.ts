import { Component } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements CanActivate {
  Authorized: boolean;
  constructor(private router: Router){
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

}
