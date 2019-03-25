import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './shared';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { ProductAdminComponent } from './admin/productAdmin.component';
import { OrderAdminComponent } from './admin/orderAdmin.component';
import { OverviewComponent } from './admin/overview.component';
import { CheckoutDetailsComponent } from './mrsshop/checkout/checkoutDetails.component';
import { CheckoutPaymentComponent } from './mrsshop/checkout/checkoutPayment.component';
import { CheckoutSummaryComponent } from './mrsshop/checkout/checkoutSummary.component';
import { OrderConfirmationComponent } from './mrsshop/checkout/orderConfirmation.component';
import { CartDetailComponent } from './mrsshop/cartDetail.component';
import { ProductSelectionComponent } from './mrsshop/productSelection.component';

const routes: Routes = [
    { path: "", component: ProductSelectionComponent },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'forbidden', component: ForbiddenComponent},
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },

    ///store app routing
  { path: "admin", redirectTo: "/admin/overview", pathMatch: "full", canActivate: [AdminGuard]},
    {
      path: "admin", component: AdminComponent,
      canActivate: [AdminGuard],
        children: [
          { path: "products", component: ProductAdminComponent, },
          { path: "orders", component: OrderAdminComponent },
          { path: "overview", component: OverviewComponent },
          { path: "", component: OverviewComponent }
        ]
      },
      { path: "checkout/step1", component: CheckoutDetailsComponent },
      { path: "checkout/step2", component: CheckoutPaymentComponent },
      { path: "checkout/step3", component: CheckoutSummaryComponent },
      { path: "checkout/confirmation", component: OrderConfirmationComponent },
      { path: "checkout", component: CheckoutDetailsComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "mrsshop", component: ProductSelectionComponent },
      { path: "**", component: ProductSelectionComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
