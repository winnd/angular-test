import { Component, OnInit } from '@angular/core'

const template = `
  <button (click)="onSave($event)"></button>
  <button [disabled]="false">Disabled Button</button>
  <form #heroForm (ngSubmit)="onSubmit(heroForm)">
    <input type="text" #box (keyup.enter)="addHero(box.value);box.value=''" placeholder="输入名字">
  </form>
`

@Component({
  selector: '提交表单',
  template,
  styles  : [``],
})
export class 提交表单 implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(data: object) {
    console.log(data)
  }

  onSave(e: Event) {
    console.log(e)
  }

  addHero() {

  }
}
