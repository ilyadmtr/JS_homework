import { Component } from '@angular/core';
import {RESUME_MOCK} from "./shared/ResumeMock";
import {TResume} from "./shared/TResume";
import {GetInfoService} from "../services/get-info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
resume:TResume;
constructor(private getInfoService: GetInfoService) {
  this.resume = this.getInfoService.resumeMock;
}
}
