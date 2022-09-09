import { Component } from '@angular/core';
import {RESUME_MOCK} from "./shared/ResumeMock";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
resume = RESUME_MOCK;

}
