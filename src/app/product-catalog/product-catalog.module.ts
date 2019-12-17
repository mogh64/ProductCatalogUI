import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProductRoutingModule } from './product-catalog-routing.module';
import { ProductComponent } from './product/product.component';
import {TableModule } from 'primeng/table';    
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    TableModule,    
    FormsModule,    
    ModalModule.forRoot()
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent    
  ]
})
export class ProductCatalogModule {}
