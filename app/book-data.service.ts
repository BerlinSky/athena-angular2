import { Injectable } from '@angular/core';
import { BOOKS } from './mocks';

@Injectable()
export class BookDataService {
  getBookList() {
    return BOOKS;
  }
}
