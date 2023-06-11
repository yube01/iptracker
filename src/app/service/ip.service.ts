import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class IpService {



  constructor(private http: HttpClient) {}

  getData(user:User): Observable<any> {
    const url =
      'https://ipgeolocation.abstractapi.com/v1/?api_key=8a78499f7a634460ba76a9e53d6f3a45';
    return this.http.get(url).pipe(
      tap((data: any) => {
        user.ipAddress = data.ip_address;
        user.city = data.city;
        user.country = data.country;
        user.continent = data.continent;
        user.flag = data.flag.svg;
        user.region = data.region;
        user.time = data.timezone.current_time;
        user.systemOrganization = data.connection.autonomous_system_organization;
        user.ispName = data.connection.isp_name;
        user.longitude = data.longitude;
        user.latitude = data.latitude
        user.isVpn = data.is_vpn


      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}

