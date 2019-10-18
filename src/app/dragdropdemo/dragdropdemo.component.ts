import { Component, OnInit } from "@angular/core";
import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-dragdropdemo",
  templateUrl: "./dragdropdemo.component.html",
  styleUrls: ["./dragdropdemo.component.css"]
})
export class DragdropdemoComponent implements OnInit {
  todo: String[] = [
    "Prepare Demo",
    "Practice",
    "Make Slides",
    "Do the talk",
    "Practice More"
  ];
  done: string[] = ["wake up early"];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor() {}

  ngOnInit() {}
}
