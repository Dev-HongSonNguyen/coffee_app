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

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children:[
      {
        path: "", component: HomePageComponent
      }
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, children:[
      {
        path: "", redirectTo:"dashboard", pathMatch:"full"
      },
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "product", component: ProductManagerComponent
      },
      {

        path: "product/edit/:id", component: ProductUpdateComponent
      },
      {
        path: "product/add", component: ProductAddComponent

      },
      {
        path: "category", component: CategoryManagerComponent
      },
      {
        path: "category/add", component: CategoryAddComponent
      },
      {
        path: "category/edit/:id", component: CategoryUpdateComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
