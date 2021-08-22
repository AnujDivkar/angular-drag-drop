import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Item } from '../../models/item';
@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.css'],
})
export class PlayCardComponent implements OnInit {
  @Input() color?: string;
  @Input() imageUrl?: string;
  @Input() uId: string = '';
  @Output() itemDrop: EventEmitter<CdkDragDrop<Array<Item>>>;

  constructor() {
    this.itemDrop = new EventEmitter();
  }

  ngOnInit(): void {}
  public drop(event: CdkDragDrop<Array<Item>>): void {
    //this.itemDrop.emit(event);
    this.imageUrl = event.previousContainer.data[event.previousIndex].imageUrl;
  }
}
