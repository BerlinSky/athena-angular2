import { Book } from './book';

export const BOOKS: Book[] = [{
    "id": 1,
    "name": "Why save the bankers?",
    "description": "The articles from a French economist",
    "price": 13.50,
    "inStock": 15,
    "image": "/images/wuthering-heights.jpg",
    "onSale": true
  },
  {
    "id": 2,
    "name": "Middlemarch",
    "description": "A complex tale of idealism, disillusion, profligacy, loyalty and frustrated love.",
    "price": 35.50,
    "inStock": 20,
    "image": "/images/middle-march.jpg",
    "onSale": false
  },
  {
    "id": 3,
    "name": "The Idiot",
    "description": "A portrait of a man of pure innocence",
    "price": 29.35,
    "inStock": 0,
    "image": "/images/sense-and-sensibility.jpg",
    "onSale": true
  },
  {
    "id": 4,
    "name": "Jane Eyre",
    "description": "A novel of intense power and intrigue",
    "price": 20.95,
    "inStock": 27,
    "image": "/images/vanity-fair.jpg",
    "onSale": false
  }
];
