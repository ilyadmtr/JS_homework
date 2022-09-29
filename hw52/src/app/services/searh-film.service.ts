import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class HttpGetFilmService{
  constructor(private http:HttpClient) {}

  getFilm(title: string, year: string, type: string){
    const url = 'http://www.omdbapi.com/';
    const apikey = 'b4a8abc7';
    const params = new HttpParams()
      .set('apikey', apikey)
      .set('t', title)
      .set('y', year)
      .set('type', type);
    return this.http.get(url, {params})
  }
}

