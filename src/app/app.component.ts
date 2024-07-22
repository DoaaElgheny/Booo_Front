import { Component } from '@angular/core';
import { TenantConfigService } from './shared/tenant.service';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from './shared/Configuration.service';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-internet-status></abp-internet-status>
  `,
})
export class AppComponent {
  constructor(private tenantConfigService: TenantConfigService,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit() {
    debugger
    
const configValue = "test1.local:4200";
this.configurationService.sendConfiguration(configValue).subscribe(
  () => {
    console.log('Configuration sent successfully.');
  },
  error => {
    console.error('Error sending configuration:', error);
  }
);

    const tenantId = 'current-tenant-id'; // You should get this dynamically, maybe from authentication
    this.tenantConfigService.getTenantConfig(tenantId).subscribe(config => {
      // Use the fetched configuration
      console.log('Tenant Config:', config);
      // Example: Set API URL dynamically based on tenant configuration
      if (config.apiUrl) {
        environment.apiUrl = config.apiUrl;
      }
    });
  }
}
