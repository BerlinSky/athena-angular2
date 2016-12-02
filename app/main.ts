import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <h2>{{book.name}}</h2>
    <p>{{book.description}}</p>
    <p>{{book.inStock}} copies in stock</p>`
})
class AppComponent {
  title = "The Book Reading Life";
  book = {
    "id": 1,
    "name": "Why save the bankers?",
    "description": "The articles from a French economist",
    "inStock": 15
  };
}

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


