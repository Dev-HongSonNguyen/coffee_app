import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './pages/Admin/product-manager/product-manager.component';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { CategoryManagerComponent } from './pages/Admin/category-manager/category-manager.component';
import { ProductUpdateComponent } from './pages/Admin/product-update/product-update.component';
import { ProductAddComponent } from './pages/Admin/product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from './pages/Admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/Admin/category-update/category-update.component';
import { PostManagerComponent } from './pages/Admin/post-manager/post-manager.component';
import { PostAddComponent } from './pages/Admin/post-add/post-add.component';
import { PostUpdateComponent } from './pages/Admin/post-update/post-update.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { CartComponent } from './pages/Client/cart/cart.component';
import { DetailProductComponent } from './pages/Client/detail-product/detail-product.component';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule } from '@angular/forms';
import { SliderManagerComponent } from './pages/Admin/slider-manager/slider-manager.component';
import { SliderAddComponent } from './pages/Admin/slider-add/slider-add.component';
import { SliderUpdateComponent } from './pages/Admin/slider-update/slider-update.component';
import { DetailCateComponent } from './pages/Client/detail-cate/detail-cate.component';
import { SaleUpdateComponent } from './pages/Admin/sale-update/sale-update.component';
import { SaleManagerComponent } from './pages/Admin/sale-manager/sale-manager.component';
import { SaleAddComponent } from './pages/Admin/sale-add/sale-add.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    HomePageComponent,
    CategoryManagerComponent,
    ProductUpdateComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    PostManagerComponent,
    PostAddComponent,
    PostUpdateComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    DetailProductComponent,
    SliderManagerComponent,
    SliderAddComponent,
    SliderUpdateComponent,
    DetailCateComponent,
    SaleUpdateComponent,
    SaleManagerComponent,
    SaleAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
