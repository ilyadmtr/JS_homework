import { Component, OnInit } from '@angular/core';
import {Goods} from './goods';
import {HttpService} from "../services/http.service";
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  goods: Goods[] | undefined;
  constructor(private httpService:HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe((data:any)=>{
      this.goods = [];
      for(const item of data){
        this.goods?.push(new Goods(item.name, parseInt(item.count), item.mcalc))
      }
    })
  }

}
