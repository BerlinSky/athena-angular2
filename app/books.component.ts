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
    // this.books = this.bookDataService.getBookList();
    this.bookDataService.getBookList().subscribe(books => this.books = books);
  }

  totalBooks() {
    // return 25;
    let total = 0;

    if (Array.isArray(this.books)) {
      for (let book of this.books) {
        total += book.inStock;
      }
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
