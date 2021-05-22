import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RoutingModule } from '../router/routing.module';
// import { Page404Component } from './page404/page404.component';
// import { ChildAComponent } from './nest-router-test/child-a/child-a.component';
// import { ChildBComponent } from './nest-router-test/child-b/child-b.component';
// import { ChildCComponent } from './nest-router-test/child-c/child-c.component'

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule    // 路由器
  ],
  providers   : [],
  bootstrap   : [AppComponent],
  declarations: [
    // NestRouterTestComponent,
  ],
})
export class AppModule {
}
