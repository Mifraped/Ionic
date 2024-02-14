import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { GolocationService } from '../shared/golocation.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public latitud!: number;
  public longitud!: number;
  public address!: string;
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(private geolocation: GolocationService) {
  }

  public async printCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;
    this.createMap();
  };

  async createMap() {
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: environment.apiKey,
        config: {
          center: {
            lat: this.latitud,
            lng: this.longitud,
          },
        zoom: 15,
        },
      });
      const markerId = await this.newMap.addMarker({
        coordinate: {
          lat: this.latitud,
          lng: this.longitud,
        }
      });
      this.geolocation.getAdress(this.latitud, this.longitud).subscribe((data: any) => {
        this.address = data.results[0].formatted_address;
      })
  }
    
}
