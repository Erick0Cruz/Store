import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0,
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
    });
  }

}
