import { Component, OnInit, createEnvironmentInjector } from '@angular/core';

import { User } from 'src/app/models/user';
import { IpService } from 'src/app/service/ip.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {







  user:User = new User()

  constructor(private ipService:IpService){}

  ngOnInit(): void {
    this.ipService.getData(this.user).subscribe(()=>{
      this.user

    })

   }







   display : any;
   center: google.maps.LatLngLiteral = {lat: 50, lng: 12};
   zoom = 4;



   moveMap(event: google.maps.MapMouseEvent) {
     if(event.latLng!= null)
     this.center = (event.latLng.toJSON());
   }

   move(event: google.maps.MapMouseEvent) {
     if(event.latLng != null)
     this.display = event.latLng.toJSON();
   }








}





