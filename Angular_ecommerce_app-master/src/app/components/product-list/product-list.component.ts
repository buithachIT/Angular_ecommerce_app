import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import {ProductItem} from '../types/productItem';
import { NgFor,} from '@angular/common';
import { CustomPipePrice } from '../pipes/custom-price.pipe';
import { CustomNamePipe } from '../pipes/custom-name.pipe';
import{ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  imports: [
    NgFor, 
    CustomNamePipe,
    CustomPipePrice,
    RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = [];
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}