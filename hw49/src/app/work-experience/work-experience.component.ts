import {Component, Input, OnInit} from '@angular/core';
import {TResume} from "../shared/TResume";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @Input() info: TResume;
  constructor() { }

  ngOnInit(): void {
  }

}
