import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddComponent } from './product-add.component';

import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddComponent],
      imports: [HttpClientModule, RouterTestingModule

      ],
      providers:[
        ProductService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
