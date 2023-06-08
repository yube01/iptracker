import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  ipAddress: string = '';
  country: string = '';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url =
      'https://ipgeolocation.abstractapi.com/v1/?api_key=8a78499f7a634460ba76a9e53d6f3a45';
    return this.http.get(url).pipe(
      tap((data: any) => {
        this.ipAddress = data.ip_address;
        this.country = data.country;
      }),
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}

