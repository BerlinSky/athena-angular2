import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Book } from './book';
// import { BOOKS } from './mocks';

@Injectable()
export class BookDataService {

  constructor(private http: Http) { }

  getBookList() {
    return this.http.get('app/book-list.json').map(response => <Book[]>response.json().data);
  }
}
