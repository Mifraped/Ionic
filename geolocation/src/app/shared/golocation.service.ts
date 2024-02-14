import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GolocationService {

  private url: string = 'https://maps.googleapis.com/maps/api/geocode/json?';

  constructor(private http: HttpClient) { }

  public getAdress(lat: number, lng: number){
    return this.http.get(`${this.url}latlng=${lat},${lng}&key=${environment.apiKey}`)
  }
}
