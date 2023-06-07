import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ipAddress:string = ''
  country:string = ''

  constructor(private http:HttpClient){
this.getData();

  }

  getData(){
    const url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=8a78499f7a634460ba76a9e53d6f3a45';
    this.http.get(url).subscribe(
      (data: any) => {
        this.ipAddress = data.ip_address
        this.country = data.country
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  ngOnInit(): void {

  }






}
