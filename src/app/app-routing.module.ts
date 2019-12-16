import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './SelectivePreloadingStrategyService';


const routes: Routes = [  
  { path: 'products', loadChildren: () => import(`./product-catalog/product-catalog.module`).then(m => m.ProductCatalogModule) },
  {path:'',redirectTo:'products',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    
    {
      enableTracing: false // <-- debugging purposes only     
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
