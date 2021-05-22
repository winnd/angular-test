import { Component, OnInit } from '@angular/core'
import { CartService } from '../../cart.service'
import { FormBuilder } from '@angular/forms'

@Component({
  selector   : 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls  : ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems()
  checkoutForm = this.formBuilder.group({
    name   : '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.warn('订单已提交', this.checkoutForm.value)
    this.checkoutForm.reset()
  }

  ngOnInit(): void {
  }

}
