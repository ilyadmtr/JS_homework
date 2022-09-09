import {Component, Input, OnInit} from '@angular/core';
import {TResume} from "../shared/TResume";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  @Input() info: TResume;
  constructor() { }

  ngOnInit(): void {
  }

}
