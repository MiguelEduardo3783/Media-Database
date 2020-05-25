import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export enum SearchType {
  all = '',
  movies = 'movie',
  series = 'series',
  episode = 'episode',
  videogames = 'game'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url= 'http://www.omdbapi.com/';
  apiKey = '6be02190';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

getDetails(id): Observable<any>{
  return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
