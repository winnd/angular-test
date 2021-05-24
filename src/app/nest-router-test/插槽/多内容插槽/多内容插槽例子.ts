import { Component } from '@angular/core'
@Component({
  selector: '多内容插槽例子',
  template: `
      <h2>多内容插槽例子</h2>
      <ng-content></ng-content>
      <ng-content select="[question]"></ng-content>
  `,
})
export class 多内容插槽例子 {

}
