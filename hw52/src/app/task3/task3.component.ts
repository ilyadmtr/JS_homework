import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpGetFilmService} from "../services/searh-film.service";

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor(private httpGetFilmService: HttpGetFilmService, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  film: any = "";
  done: boolean = false;
  search(title: string, year: string, type:string){
    if(title != ""){
      this.httpGetFilmService.getFilm(title, year, type).subscribe((data:any)=>{
        if(data){
          this.done = true;
          this.film = data;
        }
      })
    }
  }

}
