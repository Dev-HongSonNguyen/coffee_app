import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './pages/Admin/product-manager/product-manager.component';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';
import { HttpClientModule } from "@angular/common/http"
import { CategoryManagerComponent } from './pages/Admin/category-manager/category-manager.component';
import { ProductUpdateComponent } from './pages/Admin/product-update/product-update.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    HomePageComponent,
    CategoryManagerComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
