import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  @Input() categoryID: number;
  products: Product[];

  constructor(private route: ActivatedRoute) {
    this.categoryID = 1;
    this.products = [
      {ID: 1, Name:'Спортивные костюмы', Description:'Very cheap', CategoryID: 1},
      {ID: 1, Name:'Рашгарды', Description:'Very cheap', CategoryID: 2},
      {ID: 1, Name:'Футболки', Description:'Very cheap', CategoryID: 3},
      {ID: 1, Name:'Кроссовки', Description:'Very cheap', CategoryID: 4},
    ];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      let _id = params.get('id');
      if (_id) {
        this.categoryID = +_id;
      }
    })
  }

}
