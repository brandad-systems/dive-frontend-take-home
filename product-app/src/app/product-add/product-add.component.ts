import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

const URL = environment.apiUrl + '/api/upload';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL, itemAlias: 'photo'
  });
  response: string = '';
  imgSrcPre = '../../assets/uploads/';

  product: Product = <Product>{};

  directToPath = '/product-overview';

  categories: any[] = [{
    categoryName: 'Elektronik',
    subcategories: [
      { subcategoryName: 'Audio & HiFi' },
      { subcategoryName: 'Foto & Kamera' },
      { subcategoryName: 'Konsolen' },
      { subcategoryName: 'PC/Notebook' },
      { subcategoryName: 'Sonstiges' }
    ]
  },
    {
      categoryName: 'Freizeit & Sport',
      subcategories: [
        { subcategoryName: 'Camping' },
        { subcategoryName: 'Kinder-Spielzeug' },
        { subcategoryName: 'Sport-Equipment' },
        { subcategoryName: 'Sonstiges' }
      ]
    },
    {
      categoryName: 'Haus & Garten',
      subcategories: [
        { subcategoryName: 'Event-Zubehör' },
        { subcategoryName: 'Garten-Zubehör' },
        { subcategoryName: 'Werkzeug' },
        { subcategoryName: 'Sonstiges' }
      ]
    }];

  statusOptions: string[] = ['Wie neu', 'Sehr gut', 'Gut', 'Akzeptabel'];

  productForm = new FormGroup({
    image: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.maxLength(500)),
    category: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  floatLabelControl = new FormControl('auto');

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.uploader.response.subscribe(res =>
      this.response = res
    );
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };

  }


  addProduct(): void {
    this.productForm.value.submitted = true;
    if (this.productForm.valid) {
      this.product = this.productForm.value;

      //Get real Imagepath and delete fakepath, Upload img with Server to assets folder
      this.product.image = this.imgSrcPre + this.product.image.replace('C:\\fakepath\\', '');
      this.productService.addProduct(this.product).subscribe((response: any) => {
        this.uploader.uploadAll();
        this.router.navigateByUrl(this.directToPath);
      });
    }
  }


}
