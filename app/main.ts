import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <ul>
      <li *ngFor="let book of books">
        <h2>{{book.name}}</h2>
        <p>{{book.description}}</p>
        <p *ngIf="book.inStock > 0">{{book.inStock}} copies in stock</p>
        <p *ngIf="book.inStock === 0">Temporarily out of stock</p>
      </li>
    </ul>`
})
class AppComponent {
  title = "The Book Reading Life";
  books = [{
      "id": 1,
      "name": "Why save the bankers?",
      "description": "The articles from a French economist",
      "inStock": 15
    },
    {
      "id": 2,
      "name": "Middlemarch",
      "description": "A complex tale of idealism, disillusion, profligacy, loyalty and frustrated love.",
      "inStock": 20
    },
    {
      "id": 3,
      "name": "The Idiot",
      "description": "A portrait of a man of pure innocence",
      "inStock": 0
    },
    {
      "id": 4,
      "name": "Jane Eyre",
      "description": "A novel of intense power and intrigue",
      "inStock": 27
    }
  ];
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


