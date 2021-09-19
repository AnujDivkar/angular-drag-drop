import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { Item } from '../models/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'play-book';
  slides: Array<Item> = [
    new Item({ color: 'blue' }),
    new Item({ color: 'red' }),
    new Item({ color: 'green' }),
    new Item({ color: 'yellow' }),
    new Item({ color: 'white' }),
    new Item({ color: 'lightblue' }),
  ];
  playbook: Array<Item> = [];
  sketches: Array<Item> = [
    new Item({ imageUrl : '../assets/Forest.jfif' }),
    new Item({ imageUrl : '../assets/Tree.jfif' }),
    new Item({ imageUrl : '../assets/Lake.jfif' }),
    new Item({ imageUrl : '../assets/Mountains.jfif' }),
    new Item({ imageUrl : '../assets/Nature.jfif' }),
    new Item({ imageUrl : '../assets/Waterfall.jfif' }),
  ];

  drop(event: CdkDragDrop<Array<Item>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      /*copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      */
      this.playbook.splice(
        event.currentIndex,
        0,
        new Item({color:event.previousContainer.data[event.previousIndex].color}));
    }
  }
  public get playCarsIds(): string[] {
    let ids :string[]= [];
    this.playbook.forEach((childItem) => {  ids.push(childItem.uId||"") });
    return ids;
  }
}
