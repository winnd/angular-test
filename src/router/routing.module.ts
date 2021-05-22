import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from '../app/product-list/product-list.component'
import { ProductDetailComponent } from '../app/product-list/product-detail/product-detail.component'
import { CartComponent } from '../app/product-list/cart/cart.component'
import { ShippingComponent } from '../app/shipping/shipping.component'
import { AppComponent } from '../app/app.component'
import { ProductAlertsComponent } from '../app/product-list/product-alerts/product-alerts.component'
import { TopBarComponent } from '../app/top-bar/top-bar.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { Page404Component } from '../app/page404/page404.component'
import { NestRouterTestComponent } from '../app/nest-router-test/nest-router-test.component'
import { ChildAComponent } from '../app/nest-router-test/child-a/child-a.component'
import { ChildBComponent } from '../app/nest-router-test/child-b/child-b.component'
import { ChildCComponent } from '../app/nest-router-test/child-c/child-c.component'
import { ChildDComponent } from '../app/nest-router-test/child-d/child-d.component'

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {
    path     : 'nest-router-test',
    component: NestRouterTestComponent,
    children : [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent},
      {path: 'child-c', component: ChildCComponent},
      {path: 'child-d', component: ChildDComponent},
    ],
  },
  {path: '', redirectTo: '/productList', pathMatch: 'full'},    // 重定向到/productList
  {path: '**', component: Page404Component},
]

@NgModule({
  imports     : [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports     : [RouterModule],
  declarations: [
    AppComponent,
    CartComponent,
    TopBarComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent,
    ChildDComponent,
    Page404Component,
    ShippingComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    NestRouterTestComponent,
  ],
})

export class RoutingModule {
}
