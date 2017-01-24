import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { Artist } from '../artist/artist';

import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail.component.html',
})
export class ArtistDetailComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input() artist: Artist;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.artistService.getArtist(+params['id']))
      .subscribe(artist => this.artist = artist);
  }

  navigateBack(): void {
    this.location.back();
  }

  saveArtist(): void {
    this.artistService.editArtist(this.artist)
      .then(() => this.navigateBack());
  }

}
