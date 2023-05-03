import { Component } from '@angular/core';
import {  Router, CanActivate } from '@angular/router';
import {MyDB} from "../db";
import {Product} from "../models";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements CanActivate {
  Authorized: boolean;
  products: Product[];
  constructor(private router: Router){
    this.Authorized = false;
    this.products = MyDB.Products;
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
