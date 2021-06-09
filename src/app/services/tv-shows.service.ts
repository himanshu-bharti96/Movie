import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http:HttpClient) { }

  popularTVUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=eed4c611316f9be91de29c2aaac1d25c';

  private handleError<T>(operation='operation', result?:T) {
    return (error:any):Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed:${error.message}`);
      return of(result as T)
      
    }
  }

  getPopularTV():Observable<any>{
    return this.http.get<any>(this.popularTVUrl).pipe(
      catchError(this.handleError<any>("Get Popular"))
    );
  }
}
