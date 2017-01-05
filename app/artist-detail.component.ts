import { Component, Input } from '@angular/core';

import { Artist } from './artist';

@Component({
  selector: 'artist-detail',
  template: `
    <div *ngIf="artist" class="artist">
       Artist: <span>{{ artist.name }}</span>
       Web Site: <input [(ngModel)]="artist.webSite" placeholder="webSite">
    </div>
  `
})
export class ArtistDetailComponent {
  @Input()
  artist: Artist;
}
