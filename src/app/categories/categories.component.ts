import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models";
import {ActivatedRoute} from "@angular/router";
import {MyDB} from "../db";
import {CategoryService} from "../category.service";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  @Input() categoryID: number;
  products: Product[];


  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService) {
    this.categoryID = 0;
    this.products = MyDB.Products;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      let _id = params.get('id');
      if (_id) {
        this.categoryID = +_id;
      }
    });

  }
  getCategoryProducts(){
    this.categoryService.getCategoryProducts(this.categoryID).subscribe((products) => {
      this.products = products;
    });
  }

  updateProduct(product: Product){
    this.productService.updateProduct(product)
  }

  likeClicked(product: Product){

      product.liked = !product.liked;

  }
  categoryIDtoString(){
    return this.categoryID.toString()
  }

}
