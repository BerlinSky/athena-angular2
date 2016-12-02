import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <book-list></book-list>`
})
export class AppComponent {
  title = "The Book Reading Life";
}
