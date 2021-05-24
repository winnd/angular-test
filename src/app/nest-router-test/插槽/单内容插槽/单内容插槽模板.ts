import { Component } from '@angular/core'
@Component({
  selector: '单内容插槽',
  template: `
    <h2>单内容插槽测试</h2>
    <ng-content></ng-content>
  `,
})
export class 单内容插槽模板 {

}
