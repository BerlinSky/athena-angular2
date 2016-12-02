import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  template: `<p>There are {{totalBooks()}} total books in stock</p>
    <ul>
      <li *ngFor="let book of books">
        <h2>{{book.name | uppercase}}</h2>
        <p>{{book.description}}</p>
        <p>{{book.price | currency: 'EUR':true}}</p>
        <p *ngIf="book.inStock > 0">{{book.inStock}} copies in stock</p>
        <p *ngIf="book.inStock === 0">Temporarily out of stock</p>
      </li>
    </ul>`
})
export class BooksComponent {
  title = "The Book Reading Life";
  books = [{
      "id": 1,
      "name": "Why save the bankers?",
      "description": "The articles from a French economist",
      "price": 13.50,
      "inStock": 15
    },
    {
      "id": 2,
      "name": "Middlemarch",
      "description": "A complex tale of idealism, disillusion, profligacy, loyalty and frustrated love.",
      "price": 35.50,
      "inStock": 20
    },
    {
      "id": 3,
      "name": "The Idiot",
      "description": "A portrait of a man of pure innocence",
      "price": 29.35,

      "inStock": 0
    },
    {
      "id": 4,
      "name": "Jane Eyre",
      "description": "A novel of intense power and intrigue",
      "price": 20.95,

      "inStock": 27
    }
  ];

  totalBooks() {
    // return 25;
    let total = 0;

    for (let book of this.books) {
      total += book.inStock;
    }

    return total;
  }
}
