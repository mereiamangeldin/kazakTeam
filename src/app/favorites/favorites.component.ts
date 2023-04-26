import { Component } from '@angular/core';
import { MyDB } from '../db';
import { Product } from '../models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  products: Product[];

  constructor(){
    this.products = MyDB.Products.filter(product=>product.liked==true);
  }

  likeClicked(product: Product){
    product.liked = !product.liked;
}
categoryIDtoString(id: number){
  return id.toString()
}
}
