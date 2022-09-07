import {Component, Input, OnInit} from '@angular/core';
import {Task1Types} from "./types";

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
@Input() item: Task1Types;
  constructor() { }

  ngOnInit(): void {
  }

}
