import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductServiceProxy, API_BASE_URL } from 'src/share/service-proxies/service-proxies';
import { HttpClientModule } from '@angular/common/http';
import { AppConsts } from 'src/share/AppConsts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProductCatalogModule } from './product-catalog/product-catalog.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function getBaseUrl(): string {
  return AppConsts.baseUrl;
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent        
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,        
    FormsModule,
    ProductCatalogModule ,
    NgbModule
  ],
  providers: [
    { provide: API_BASE_URL, useFactory: getBaseUrl },
    ProductServiceProxy    
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
