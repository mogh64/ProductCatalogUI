import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProductRoutingModule } from './product-catalog-routing.module';
import { ProductComponent } from './product/product.component';
import {TableModule } from 'primeng/table';    
import { ProductDetailComponent } from './product/product-detail/product-detail.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    TableModule,    
    FormsModule,
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ]
})
export class ProductCatalogModule {}
