import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './shared/services/products.service';
import { CartService } from './shared/services/cart.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, CartComponent, HeaderComponent, FooterComponent, ProductsListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
