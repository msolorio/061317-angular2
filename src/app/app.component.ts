import { Component } from '@angular/core';

import { FridgeItem } from './fridgeItem';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let item of fridgeItems" id={{item.id}}>
        {{item.name}}
      </li>
    </ul>
    <p>Your science project is the {{scienceProject.name}}</p>
    <p *ngIf="scienceProject.moldy">Your science project is sufficiently moldy</p>
  `
})
export class AppComponent  {
  title = 'Fridge Items';
  fridgeItems = [
    new FridgeItem(0, 'Apple', false),
    new FridgeItem(1, 'Sandwich', true),
    new FridgeItem(2, 'Eggs', false)
  ];
  scienceProject = this.fridgeItems[1];
}
