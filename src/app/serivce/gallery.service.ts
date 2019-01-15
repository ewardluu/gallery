import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '563492ad6f91700001000001ccb3a9de12bf4e96884d56756949b963',
  })
};

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }
  getImage(page): Observable <any> {
    const url = 'https://api.pexels.com/v1/curated?per_page=80&page=' + page;
   return this.http.get(url, { headers: new HttpHeaders({'Authorization': '563492ad6f91700001000001ccb3a9de12bf4e96884d56756949b963'}) } )
   .pipe(
    map( data => {
       return data;
    }),
    catchError(err => {
      console.error(err.message);
      return throwError('Error thrown from catchError');
    })
   );
  }
}
