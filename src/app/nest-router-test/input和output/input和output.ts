import { Component } from '@angular/core'
@Component({
  selector: 'input和output',
  template: `
    <app-item-output (newItemEvent)="addItem($event)"></app-item-output>
  `,
})
export class input和output {
  addItem(item: object) {
    console.log(item)
  }
}
