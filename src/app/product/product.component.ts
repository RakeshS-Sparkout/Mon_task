import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [
    { name: 'Laptop', price: 1200, category: 'Electronics', inStock: true, rating: 4.7, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/l/o/15s-fq5330tu-thin-and-light-laptop-hp-original-imah43btysgzqv6r.jpeg?q=70' },
    { name: 'Smartphone', price: 950, category: 'Electronics', inStock: false, rating: 4.3, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/c/y/-original-imah3hvkuw8k7hcw.jpeg?q=70' },
    { name: 'T-shirt', price: 25, category: 'Clothing', inStock: true, rating: 4.0, image: 'https://rukminim2.flixcart.com/image/612/612/ky1vl3k0/t-shirt/e/s/9/xxs-tomcut-petrolblue-lauren-adams-original-imagadgduadasgzp.jpeg?q=70' },
    { name: 'Jeans', price: 70, category: 'Clothing', inStock: false, rating: 4.6, image: 'https://rukminim2.flixcart.com/image/612/612/l58iaa80/jean/1/m/p/5-6-years-ss22kljn014b-killer-original-imagfygqzfzhzzy9.jpeg?q=70' },
    { name: 'Watch', price: 80, category: 'Electronics', inStock: true, rating: 4.2, image: 'https://rukminim2.flixcart.com/image/612/612/l19m93k0/watch/3/x/8/-original-imagcvgadpwxzhc3.jpeg?q=70' },
    { name: 'Television', price: 1300, category: 'Electronics', inStock: true, rating: 4.1, image:'https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/8/0/-original-imah2dzwa44rbqds.jpeg?q=70'},
    { name: 'Refridgerator', price: 800, category: 'Electronics', inStock: true, rating: 3.9, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/b/5/q/215-vmpro-prm-3s-inv-magnum-steel-z-132-2-3-2023-37-4-whirlpool-original-imah2ubgy7w3cqda.jpeg?q=70'},
    { name: 'Shirt', price: 35, category: 'Clothing', inStock: false, rating: 3.8, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/2/c/xxl-551-combraided-original-imagzk67cy5byhxs.jpeg?q=70'}
  ];

}
