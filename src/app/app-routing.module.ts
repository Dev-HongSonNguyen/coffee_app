import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './pages/Admin/product-manager/product-manager.component';
import { CategoryManagerComponent } from './pages/Admin/category-manager/category-manager.component';
import { ProductUpdateComponent } from './pages/Admin/product-update/product-update.component';
import { ProductAddComponent } from './pages/Admin/product-add/product-add.component';
import { CategoryAddComponent } from './pages/Admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/Admin/category-update/category-update.component';
import { PostManagerComponent } from './pages/Admin/post-manager/post-manager.component';
import { PostAddComponent } from './pages/Admin/post-add/post-add.component';
import { PostUpdateComponent } from './pages/Admin/post-update/post-update.component';
import { SigninComponent } from './pages/Client/signin/signin.component';
import { SignupComponent } from './pages/Client/signup/signup.component';
import { CartComponent } from './pages/Client/cart/cart.component';
import { DetailProductComponent } from './pages/Client/detail-product/detail-product.component';
import { authGuard } from './auth.guard';
import { SliderManagerComponent } from './pages/Admin/slider-manager/slider-manager.component';
import { SliderAddComponent } from './pages/Admin/slider-add/slider-add.component';
import { SliderUpdateComponent } from './pages/Admin/slider-update/slider-update.component';

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children:[
      {
        path: "", component: HomePageComponent
      },
      {
        path: "signin", component: SigninComponent
      },
      {
        path: "signup", component: SignupComponent
      },
      // router product
      {
        path: "product/:id", component: DetailProductComponent
      },
      // router cart
      {
        path: "cart", component: CartComponent,
      }
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, canActivate:[authGuard], children:[
      {
        path: "", redirectTo:"dashboard", pathMatch:"full"
      },
      {
        path: "dashboard", component: DashboardComponent
      },
      // router product
      {
        path: "product", component: ProductManagerComponent
      },
      {

        path: "product/edit/:id", component: ProductUpdateComponent
      },
      {
        path: "product/add", component: ProductAddComponent

      },
      // router category
      {
        path: "category", component: CategoryManagerComponent
      },
      {
        path: "category/add", component: CategoryAddComponent
      },
      {
        path: "category/edit/:id", component: CategoryUpdateComponent
      },
      // router post
      {
        path: "post", component: PostManagerComponent
      },
      {
        path: "post/add", component: PostAddComponent
      },
      {
        path: "post/edit/:id", component: PostUpdateComponent
      },
      //router slider
      {
        path: "slider", component: SliderManagerComponent
      },
      {
        path: "slider/add", component: SliderAddComponent
      },
      {
        path: "slider/edit/:id", component: SliderUpdateComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
