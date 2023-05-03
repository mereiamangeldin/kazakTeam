import {Component, OnInit} from '@angular/core';
import { MyDB } from '../db';
import { Product } from '../models';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  products: Product[];

  constructor(private productService: ProductService){
    this.products = MyDB.Products.filter(product=>product.liked==true);
  }


  likeClicked(product: Product){
    product.liked = !product.liked;
}
categoryIDtoString(id: number){
  return id.toString()
}

  ngOnInit(): void {
  }

  getFavoriteProducts(){
    this.productService.getFavoriteProductsOfUser().subscribe((products) => {
      this.products = products;
    });
  }
}
