import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../products-list/model/book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()
  book!:Book
  constructor() { }

  ngOnInit(): void {
  }

}
