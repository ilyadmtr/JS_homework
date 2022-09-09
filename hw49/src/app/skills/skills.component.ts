import {Component, Input, OnInit} from '@angular/core';
import {TResume} from "../shared/TResume";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() info: TResume;
  constructor() { }

  ngOnInit(): void {
  }

}
