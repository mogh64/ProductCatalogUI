import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceProxy, ProductOutputDto, ProductFilterInputDto } from 'src/share/service-proxies/service-proxies';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductOutputDto[];

   cols: any[];
  title = 'ProductCatalogUI';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServiceProxy: ProductServiceProxy){
    
  }
  ngOnInit(){
    debugger;
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'price', header: 'Price' },
      { field: 'lastUpdateTime', header: 'Last Update' }
  ];
    this.productServiceProxy.getProducts(undefined,undefined,
      undefined,0,10,false,'1').subscribe(data => {
      this.products= data.resultList;
    });
  }
  onRowEdit(row:any){
    if(row){
      this.router.navigate(['products', row.id]);
    }
  }
  onNewRow(){    
      this.router.navigate(['products', '']);    
  }
  search(value:string){
    if(value.length==0){
      return;
    }
    let convert = Number(value);
    let filter = new ProductFilterInputDto();
    if ( !isNaN(convert) ) {
      filter.code=convert;
    } else{
      filter.name = value;
    }
    this.productServiceProxy.getProducts(filter.code,
      filter.name,
      undefined,0,10,true,'1').subscribe(data => {
        this.products= data.resultList;
      });
  }
  getExcel(){
    debugger;
    let filter = new ProductFilterInputDto();
    this.productServiceProxy.exportExcel(filter,'1').subscribe(result => {
      let value: any;
                let name = 'file';
                value = 'data:' + result.extension + ';base64,' + result.data;
                name = result.name ;
                let element = document.createElement('a');
                element.setAttribute('href', value);
                element.setAttribute('download', name);

                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
    });
  }
}
