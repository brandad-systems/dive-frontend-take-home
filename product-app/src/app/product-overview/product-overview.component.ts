import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements AfterViewInit {
  data: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (product: Product) => `${product.id}`
    },
    {
      columnDef: 'image',
      header: 'Produktfoto',
      cell: (product: Product) => `${product.image}`
    },
    {
      columnDef: 'title',
      header: 'Titel',
      cell: (product: Product) => `${product.title}`
    },
    {
      columnDef: 'description',
      header: 'Beschreibung',
      cell: (product: Product) => `${product.description}`
    },
    {
      columnDef: 'category',
      header: 'Kategorie',
      cell: (product: Product) => `${product.category}`
    },
    {
      columnDef: 'price',
      header: 'Preis',
      cell: (product: Product) => `${product.price}`
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (product: Product) => `${product.status}`
    }
  ];


  displayedColumns = this.columns.map(c => c.columnDef);
  resultsLength = 0;
  isLoadingProducts = true;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngAfterViewInit() {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.isLoadingProducts = false;
      this.data = data;

    });


  }

  routeToProductAdd(): void {
    this.router.navigateByUrl('/product-add');
  }
}
