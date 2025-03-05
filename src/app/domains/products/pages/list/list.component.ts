import { Component, EventEmitter, signal, Output, Input, inject, SimpleChange, SimpleChanges } from '@angular/core';

import { RouterLinkWithHref } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  //Se reemplaza por service store
  //cart = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id? : string;

  ngOnInit(){
    //this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    /* const category_id = changes['category_id'];
    if(category_id){
      this.getProducts();
    } */
    this.getProducts();
  }

  addToCart(product: Product){
    //Se reemplaza por service store
    //this.cart.update(prevState => [...prevState, product]);
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getAll(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {

      }
    })
  }
}
