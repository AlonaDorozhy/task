import {  Component } from '@angular/core';
import { ColumnMode, SelectionType  } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  rows = [];
  columns = [{ name: 'title' }, { name: 'author' }, { name: 'language' }, {name: 'country'} ];
  ColumnMode = ColumnMode;
  SelectionType  = SelectionType ;
  
  constructor() {
    this.fetch((data: never[]) => {
      this.rows = data;
    });
  }

  fetch(books: { (data: any): void; (arg0: any): void; }) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/books.json`);
    req.onload = () => {
      const data = JSON.parse(req.response);
      books(data);
    };
    req.send();
  }


}
