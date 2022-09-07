import {Component} from '@angular/core';
import {Task1Types} from "./task1/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
  path: '/assets/bill_gates.png';
  links: string[] = ['https://en.wikipedia.org/wiki/Bill_Gates', 'https://www.gatesfoundation.org/', 'https://www.gatesnotes.com/', 'https://twitter.com/billgates'];
  task1Obj: Task1Types[] = [{
    quotation: 'Patience is a key element of success',
    author: 'Bill Gates'
  },
    {
      quotation: 'If you think your teacher is tough, wait till you get a boss',
      author: 'Bill Gates'
    },
    {
      quotation: 'Life is not fair — get used to it!',
      author: 'Bill Gates'
    },
    {
      quotation: 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
      author: 'Bill Gates'
    },
    {
      quotation: 'Be nice to nerds. Chances are you’ll end up working for one',
      author: 'Bill Gates'
    },
  ]
  constructor() {
  this.path = '/assets/bill_gates.png'
  }
}
