import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {HttpPostService} from "../services/http-post.service";

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  user: User = new User("", "");
  answer:string = "";
  done: boolean = false;
  constructor(private httpPostService: HttpPostService) { }

  submit(user:User){
    this.httpPostService.postData(user).subscribe(
      (data: any)=>{this.answer = data.login; this.done = true;console.log(data)}, error=>console.log(error)
    )
    console.log(this.answer)
  }
  ngOnInit(): void {
  }

}
