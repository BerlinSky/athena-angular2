import { Component } from '@angular/core';
import { Book } from './book';
// import { BOOKS } from './mocks';
import { BookDataService } from './book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: 'app/books.component.html',
  styleUrls: ['app/books.component.css']
})
export class BooksComponent {
  title = "The Book Reading Life";
  books: Book[];

   constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    // this.books = BOOKS;
    // const bookDataService = new BookDataService();
    this.books = this.bookDataService.getBookList();
  }

  totalBooks() {
    // return 25;
    let total = 0;

    for (let book of this.books) {
      total += book.inStock;
    }

    return total;
  }

  upQuantity(book:any) {
    if (book.quantity < book.inStock) {
      book.quantity++;
    }
  }

  downQuantity(book:any) {
    if (book.quantity > 0) {
      book.quantity--;
    }
  }
}
