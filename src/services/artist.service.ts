import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Artist } from '../artist/artist';

@Injectable()
export class ArtistService {

  private artistsUrl = 'api/artists';

  constructor(private http: Http) { }

  getArtists(): Promise<Artist[]> {
    // return Promise.resolve(ARTISTS);
    return this.http.get(this.artistsUrl)
                .toPromise()
                .then(response => response.json().data as Artist[])
                .catch(this.processError);
  }

  getArtist(id: number): Promise<Artist> {
    const artistUrl = `${this.artistsUrl}/${id}`;

    return this.http.get(artistUrl)
                .toPromise()
                .then(response => response.json().data as Artist)
                .catch(this.processError);
  }

  editArtist(artist: Artist): Promise<Artist> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const artistUrl = `${this.artistsUrl}/${artist.id}`;

    return this.http
      .put(artistUrl, JSON.stringify(artist), {headers: headers})
      .toPromise()
      .then(() => artist)
      .catch(this.processError);
  }

  createArtist(name: string): Promise<Artist> {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http
      .post(this.artistsUrl, JSON.stringify({name: name}), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.processError);
  }

  private processError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
