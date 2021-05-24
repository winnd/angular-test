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
import { 获取input值的方法 } from '../app/nest-router-test/获取input值的方法/获取input值的方法'
import { input和output } from '../app/nest-router-test/input和output/input和output'
import { 单内容插槽模板 } from '../app/nest-router-test/插槽/单内容插槽/单内容插槽模板'
import { 单内容插槽例子 } from '../app/nest-router-test/插槽/单内容插槽/单内容插槽例子'
import { 多内容插槽例子 } from '../app/nest-router-test/插槽/多内容插槽/多内容插槽例子'
import { 多内容插槽模板 } from '../app/nest-router-test/插槽/多内容插槽/多内容插槽模板'

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
    获取input值的方法,
    input和output,
    单内容插槽模板,
    单内容插槽例子,
    多内容插槽例子,
    多内容插槽模板,
  ],
})

export class RoutingModule {
}
