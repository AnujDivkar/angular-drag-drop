import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  @Input() imageUrl?:string;

  constructor() {     
  }

  ngOnInit(): void {
  }
  
}
