import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Artist } from '../artist/artist';

@Injectable()
export class ArtistSearchService {
  private artistsUrl = 'api/artists';

  constructor(private http: Http) { }

  search(searchValue: string): Observable<Artist[]> {
    return this.http
          .get(`${this.artistsUrl}/?name=${searchValue}`)
          .map((resp: Response) => resp.json().data as Artist[]);
  }
}
