import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, map } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  @ViewChild('map',{static:true})
  mapRef!:ElementRef

  map!:Map

  constructor(){}

  ngOnInit(): void {

  }

  initializeMap(){
    if(this.map) return


    this.map = map(this.mapRef.nativeElement)
  }

}
