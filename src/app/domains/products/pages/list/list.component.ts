import { Component, EventEmitter, signal, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){

    const iniProducts: Product[] = [
      {
        id: Date.now(),
        title: 'product 1',
        price: 3500,
        image: 'https://picsum.photos/640/640?r=14'
      },
      {
        id: Date.now(),
        title: 'product 2',
        price: 6000,
        image: 'https://picsum.photos/640/640?r=23'
      },
      {
        id: Date.now(),
        title: 'product 3',
        price: 7500,
        image: 'https://picsum.photos/640/640?r=34'
      },
      {
        id: Date.now(),
        title: 'product 4',
        price: 20000,
        image: 'https://picsum.photos/640/640?r=44'
      }
    ];

    this.products.set(iniProducts);
  }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }
}
