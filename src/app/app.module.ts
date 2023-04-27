import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
>>>>>>> 1184b3015d95376a433dcbce7ae11f915a65c2a1

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    FavoritesComponent,
    PurchasesComponent,
    CategoriesComponent,
    ProductDetailComponent,
    SearchComponent,
    AuthorizationComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
