import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component'),
      },
      {
        path:'our-product',
        loadChildren:()=> import('./modules/our-products/our-products.module').then(
          (m)=>m.OurProductsModule)
      },
      {
        path:'competitors',
        loadChildren:()=>import('./modules/competitors/competitors.module').then(
          (m)=>m.CompetitorsModule)
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./modules/team/team.module').then(
            (m) => m.TeamModule),
      },      
      {
        path:'territories',
        loadChildren:()=>import('./modules/territories/territories.module').then(
          (m)=>m.TerritoriesModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/product-comparison/product-comparison.module').then(
          (m) => m.ProductsModule),

      },
      {
        path: 'categories',
        loadChildren: () => import('./modules/categories/categories.module').then(
          (m) => m.CategoriesModule),

      }            
    ],
  },
  {
    path: '',
    component: GuestComponent,
    children: [

      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },

      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/authentication/authentication.module').then(
            (m) => m.AuthenticationModule,
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
