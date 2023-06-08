
import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/app/service/ip.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ipAddress: string | undefined;
  country: string | undefined;

  constructor(private ipService: IpService) {}

  ngOnInit(): void {
    this.ipService.getData().subscribe(() => {
      this.ipAddress = this.ipService.ipAddress;
      this.country = this.ipService.country;
    });
  }

  }







