import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=eed4c611316f9be91de29c2aaac1d25c'; 
  topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eed4c611316f9be91de29c2aaac1d25c';

  private handleError<T>(operation='operation', result?:T) {
    return (error:any):Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed:${error.message}`);
      return of(result as T)
      
    }
  }

  getPopular(): Observable<any> {
    console.log("In get Popular");
    return this.http.get<any>(this.popularUrl).pipe(
      catchError(this.handleError<any>("Get Popular"))
      
    );
  }

  getTopRated(): Observable<any>{
    return this.http.get<any>(this.topRatedUrl).pipe(
      catchError(this.handleError<any>('Get TopRated'))
    );
  }
}
