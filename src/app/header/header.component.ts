import {Component, OnInit} from '@angular/core';
import {Category} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  categories: Category[];
  constructor() {
    this.categories = [
      {ID: 1, Name: 'Спортивные костюмы'},
      {ID: 2, Name: 'Рашгарды'},
      {ID: 3, Name: 'Футболки'},
      {ID: 4, Name: 'Кроссовки'},
    ];
  }




}
