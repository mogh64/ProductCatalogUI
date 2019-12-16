import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceProxy, ProductInputDto } from 'src/share/service-proxies/service-proxies';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   title;'';
   id:any = 0;
   productInput:ProductInputDto;
  
   
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private producServiceProxy: ProductServiceProxy){
    
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }
  onShown() {

}
save() {
  debugger;
  if(this.productInput.id>0){
    this.producServiceProxy.editProduct(this.productInput,'1').subscribe(x=>{
      this.goToMain();
    },() => {
  
    });  
  } else {
    this.producServiceProxy.addProduct(this.productInput,'1').subscribe(x=>{
      this.goToMain();
    },() => {
  
   });
  }

}
  public getProduct(id?: any){
      this.productInput = new ProductInputDto();
      if(id && id>0){
          this.title="Edit";
          this.producServiceProxy.getProduct(id,'1').subscribe(data => {
              this.productInput.init(data);
              
          });
      } else{
        this.title="Create";   
      }
      
  }
  delete(){
    this.producServiceProxy.removeProduct(this.productInput.id,'1').subscribe(x=>{
      this.goToMain();
    },() => {
  
    });
  }
  private goToMain(){
    this.router.navigate(['products']);
  }
 
}
