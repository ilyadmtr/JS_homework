import { Component, OnInit } from '@angular/core';
import {ToDoItem} from "../toDoItem";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
item:ToDoItem ={
  id: 1,
  name: "Check",
  isComplete: false
};
path:"/assets/prop.jpg";
  constructor() {
    this.path = "/assets/prop.jpg";
  }

  ngOnInit(): void {
  }

}
