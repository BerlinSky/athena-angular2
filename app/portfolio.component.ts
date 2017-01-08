import { Component } from '@angular/core';

@Component({
  selector: 'artist-portfolio',
  template: `
    <h3>Artist Portfolio</h3>
    <div>{{ title }}</div>
  `
})
export class PortfolioComponent {
  title = "A placeholder for now"
}
