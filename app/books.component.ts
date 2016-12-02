import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mocks';

@Component({
  selector: 'book-list',
  templateUrl: 'app/books.component.html',
  styleUrls: ['app/books.component.css']
})
export class BooksComponent {
  title = "The Book Reading Life";
  books: Book[];

  ngOnInit() {
    this.books = BOOKS;
  }

  totalBooks() {
    // return 25;
    let total = 0;

    for (let book of this.books) {
      total += book.inStock;
    }

    return total;
  }
}
