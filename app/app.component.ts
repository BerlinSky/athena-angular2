import { Component } from '@angular/core';

@Component({
  selector: 'artist-app',
  template: `
      <h1>Welcome {{ title }}</h1>
    `,
})
export class AppComponent  { title = 'New Artist Site'; }
