import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryArtistDataService implements InMemoryDbService {
  createDb() {
    let artists = [
      { id: 101, name: 'Carrie Underwood', webSite: "www.artist-site.com" },
      { id: 102, name: 'U2', webSite: "www.artist-site.com" },
      { id: 103, name: 'Taylor Swift', webSite: "www.artist-site.com" },
      { id: 104, name: 'Beyonce', webSite: "www.artist-site.com" },
      { id: 105, name: 'Adele', webSite: "www.artist-site.com" },
      { id: 106, name: 'Justin Bieber', webSite: "www.artist-site.com" },
      { id: 107, name: 'Jennifer Lopez', webSite: "www.artist-site.com" },
      { id: 108, name: 'Lady Gaga', webSite: "www.artist-site.com" },
      { id: 109, name: 'Katy Perry', webSite: "www.artist-site.com" },
      { id: 110, name: 'Madonna', webSite: "www.artist-site.com" }
    ];

    return {artists};
  }
}
