import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {PurchasesComponent} from "./purchases/purchases.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'purchases', component: PurchasesComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
