import { getTestBed, TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';
import { Product } from './product';


describe('ProductService', () => {
  let productService: ProductService, httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    productService = getTestBed().get(ProductService);

  });
  describe('Test with mock backend', () => {
    const URL = environment.apiUrl;

    beforeEach(() => {
      httpTestingController = TestBed.get(HttpTestingController);
    });
    it('should be created', () => {
      expect(productService).toBeTruthy();
    });

    it('should have getAllProducts function', () => {
      expect(productService.getAllProducts).toBeTruthy();
    });

    it('should have addProduct function', () => {
      expect(productService.addProduct).toBeTruthy();
    });



    it('should add new product to mock backend', () => {
      const mockProductResponse = {
        id: 1,
        image: '',
        title: '../../assets/uploads/Musikbox',
        description: 'Super Musikbox für untergwes zum mitnehmen.',
        category: 'Audio & HiFi',
        status: 'Wie neu',
        submitted: true,
        price: 12
      };

      const product = <Product>{
        id: 1,
        image: '',
        title: '../../assets/uploads/Musikbox',
        description: 'Super Musikbox für untergwes zum mitnehmen.',
        category: 'Audio & HiFi',
        status: 'Wie neu',
        submitted: true,
        price: 12
      };

      productService.addProduct(product).subscribe(response => {
        expect(response.id).toEqual(1);
        expect(response.category).toEqual('Audio & HiFi');

      });
      const req = httpTestingController.expectOne(URL + '/products');
      expect(req.request.method).toEqual('POST');
      req.flush(mockProductResponse);

    });

    //TODO: Add more tests

  });


});

