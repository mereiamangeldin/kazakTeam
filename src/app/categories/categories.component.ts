import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MyDB} from "../db";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  @Input() categoryID: number;
  products: Product[];

  constructor(private route: ActivatedRoute) {
    this.categoryID = 1;
    this.products = MyDB.Products;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      let _id = params.get('id');
      if (_id) {
        this.categoryID = +_id;
      }
    })
  }

  likeClicked(product: Product){
      product.liked = !product.liked;
  }
  categoryIDtoString(){
    return this.categoryID.toString()
  }

}
