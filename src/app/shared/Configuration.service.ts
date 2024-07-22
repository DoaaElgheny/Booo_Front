import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendConfiguration(configValue: any) {
    debugger
    const url =  `test1.local:44355/api/configuration `;  
    return this.http.post(url, { value: configValue }) ;
  }
}