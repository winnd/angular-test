import { Component } from '@angular/core'
@Component({
  selector : '获取input值的方法',
  template : `
    <input type="text" id="item-input" #newItem>
    <button (click)="addNewItem(newItem.value)">Add to parent's list</button>
  `,
  styleUrls: [],
})

export class 获取input值的方法 {
  addNewItem(value: string) {
    console.log(value)
  }
}
