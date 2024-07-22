
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TenantConfigService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTenantConfig(tenantId: string): Observable<any> {
    const url = `${this.apiUrl}/api/abp/multi-tenancy/tenants/${tenantId}/configuration`;
    return this.http.get<any>(url);
  }
}
