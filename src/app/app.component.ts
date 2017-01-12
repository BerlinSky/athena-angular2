import { Component } from '@angular/core';
import '../../public/css/styles.css';

export class Artist {
  id: number;
  name: string;
  webSite: string;
}

@Component({
  selector: 'artist-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New Artist Site';

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }
}



// @Component({
//   selector: 'artist-app',
//   template: `
//     <h1>Welcome to {{ title }}</h1>
//     <h3>Site Link: {{ artist.webSite }}</h3>
//     <div class="artist">
//       Artist: <span>{{ artist.name }}</span>
//     </div>
//     <div class="artist">
//         Web Site:
//         <input [(ngModel)]="artist.webSite" placeholder="webSite">
//     </div>
//   `,
// })
// export class AppComponent  {
//   title = 'New Artist Site';

// }
