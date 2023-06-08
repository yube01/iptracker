import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {




  ipData = new Subject<any>();

  constructor(private http: HttpClient) {}

  getData(): void {
    const url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=8a78499f7a634460ba76a9e53d6f3a45';
    this.http.get(url).subscribe(
      (data: any) => {
        this.ipData.next(data);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}
