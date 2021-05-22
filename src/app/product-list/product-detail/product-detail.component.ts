import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { products } from '../../products'
import { CartService } from '../../cart.service'

@Component({
  selector   : 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls  : ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined
  name: string | undefined

  constructor(
    private route: ActivatedRoute, // 注入路由器
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))   // 静态获取id

    this.product = products.find(product => product.id === productIdFromRoute)

    // this.route.queryParams.subscribe(params => {   // 动态订阅获取id
    //   this.name = params['name']
    // })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('添加到购物车')
  }

}
