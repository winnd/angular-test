import { Component, OnInit } from '@angular/core'

const template = `
    <p>test</p>
    <div class="div1" [style.background-color]="'pink'">div1</div>
    <div class="div1" [style.background-color]="getBg('yellow')">div1</div>
`


@Component({
  selector : 'child-d',
  template,
  styleUrls: ['./child-d.component.css'],
})
export class ChildDComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getBg(color: string) {
    return color
  }

}
