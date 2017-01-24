import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Artist } from '../Artist/artist';
import { ArtistSearchService } from '../services/artist-search-service';

@Component({
  selector: 'artist-search',
  templateUrl: './artist-search.component.html',
  // styleUrls: [ './artist-search.component.css' ],
  providers: [ArtistSearchService]
})
export class ArtistSearchComponent implements OnInit {

  artists: Observable<Artist[]>;

  private searchValues = new Subject<string>();

  constructor(
    private artistSearchService: ArtistSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  search(searchValue: string): void {
    this.searchValues.next(searchValue);
  }

  displayArtistInfo(artist: Artist): void {
    let link = ['/artist', artist.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.artists = this.searchValues
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(searchValue => searchValue
        ? this.artistSearchService.search(searchValue)
        : Observable.of<Artist[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Artist[]>([]);
      });
  }
}
