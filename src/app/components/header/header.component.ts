
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { IpService } from 'src/app/service/ip.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


user:User = new User()  // creating new instance


  constructor(private ipService: IpService) {}

  ngOnInit(): void {
    this.ipService.getData(this.user).subscribe(() => {
      this.user.ipAddress
      this.user.city

    });
  }


  }







