import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SuccessfulOperationComponent } from './successful-operation/successful-operation.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewProductInCartComponent } from './view-product-in-cart/view-product-in-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderConfirmationPageComponent,
    NotFoundPageComponent,
    SuccessfulOperationComponent,
    ProductComponent,
    OrdersComponent,
    NavbarComponent,
    FooterComponent,
    ViewProductInCartComponent,
    WishlistComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
