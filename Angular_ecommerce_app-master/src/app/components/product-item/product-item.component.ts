import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductItem } from '../types/productItem';
import { CustomPipePrice } from '../pipes/custom-price.pipe';
import { CustomNamePipe } from '../pipes/custom-name.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CustomPipePrice, CustomNamePipe, NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  product: ProductItem | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  changeQuantity(change: number) {
    if (this.quantity + change >= 1) {
      this.quantity += change;
    }
  }

  addToCart() {
    console.log('Sản phẩm đã được thêm vào giỏ hàng với số lượng:', this.quantity);
  }
}