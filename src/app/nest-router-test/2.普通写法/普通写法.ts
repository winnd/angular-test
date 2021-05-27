import { Attribute, Component, EventEmitter, OnInit, Output } from '@angular/core'

const template = `
--------样式绑定
  1. 绑定单个class，onSale是 blooean 类型
  <div [class.sale]="onSale"></div>

  2. 绑定多个class1
  <div [class]="{foo: true, bar: false}"></div>
  <div [class]="['foo', 'bar']"></div>
  <div [class]="onSale"></div>

  3. 绑定单个style
  <div [style.background-color]="'pink'"></div>
  <div [style.width.px]="100"></div>

  4. 绑定多个style
  <div [style]="{width: '100px', height: '100px'}"></div>
  <div [style]="'width: 100px; height: 100px;'"></div>


--------注入事件
  在页面上打印点击事件
  <button (myClick)="clickMessage=$event" clickable></button>
  <div style="display: none">{{clickMessage}}</div>

  点击上传事件
  <button (click)="delete()"></button>

---- 其他内容
  注入属性 attribute
  <app-my-input-with-attribute-decorator type="number"></app-my-input-with-attribute-decorator>

  插入innerHTML，但不知道能不能起效
  <p><span [innerHTML]="propertyTitle"></span>插入文本内容</p>

  attribute 绑定
  <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>


`

@Component({
  selector: '普通写法',
  template,
  styles  : [``],
})
export class 普通写法 implements OnInit {
  // @ts-ignore
  ariaActionName: 'aria操作的名字'
  // @ts-ignore
  propertyTitle: 'innerHTML插入文本内容'
  @Output() deleteRequest = new EventEmitter<object>()

  constructor(
    @Attribute('type') public type: string,
  ) {
  }
  ngOnInit(): void {
  }
  delete() {
    this.deleteRequest.emit({id: 'aa'})
  }
// <button (myClick)="{name:'click'}=$event" clickable>click with myClick</button>
}
