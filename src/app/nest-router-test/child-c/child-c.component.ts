import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-child-c',
  template: `
    <p>
      child-c works! </p>
  `,
  styles  : [
    `p {background: greenyellow;}

    .div1 {border: 1px solid #eee;} `,
  ],
})
export class ChildCComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
