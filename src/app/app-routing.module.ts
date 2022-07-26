import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SuccessfulOperationComponent } from './successful-operation/successful-operation.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'Home', component: ProductListComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Check-out', component: CheckoutFormComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'Product-Details/:id', component: ProductDetailsComponent },
  { path: 'My-Cart', component: ShoppingCartComponent },
  { path: 'Success', component: SuccessfulOperationComponent },
  { path: 'Order-Confirmation', component: OrderConfirmationPageComponent },
  { path: 'Wish-List', component: WishlistComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
