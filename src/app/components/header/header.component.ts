
import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/app/service/ip.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ip_address:string = ''
  country:string = ''


  constructor(private ipService:IpService){


  }



  ngOnInit(): void {
    this.ipService.getData();
    this.ipService.ipData.subscribe((data: any) => {
      this.ip_address = data.ip_address;
      this.country = data.country;
    });

  }






}
