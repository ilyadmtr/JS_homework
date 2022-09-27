import { Component, OnInit } from '@angular/core';
import { images } from '../service/galleryMemo';
import {MatDialog} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  images: {URL: string, title: string, date: string, author: string, dimensions: {width: string, height: string}, place: string}[] = images;
  order: string = '';
  constructor(private dialogRef: MatDialog) {}
  openDialog(img:any){
    this.dialogRef.open(PopUpComponent, {
      data:{
        img: img
      }
    })
  }
  ngOnInit(): void {
  }

}
