import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './products-list.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  books: Array<Book> = []
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBook()
  }


  getBook() {
    this.bookService.getBook().subscribe(data => {
      this.books = data.books
    })
  }
}
