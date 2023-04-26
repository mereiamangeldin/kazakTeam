import {Component, OnInit} from '@angular/core';
import {Category} from "../models";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  categories: Category[];
  SearchTitle: string;
  constructor(private router: Router) {
    this.categories = [
      {ID: 1, Name: 'Спортивные костюмы'},
      {ID: 2, Name: 'Рашгарды'},
      {ID: 3, Name: 'Футболки'},
      {ID: 4, Name: 'Кроссовки'},
    ];
    this.SearchTitle = "";

  }

  ResetTitle(){
    this.SearchTitle = "";
  }
 
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.router.navigate([uri, this.SearchTitle])
      this.ResetTitle();
  });
  }
}
