import { Injectable } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = {
    apiBaseUrl: '/api'
  };

  getApiUrl(endpoint: string): string {
    return `${this.config.apiBaseUrl}/${endpoint}`;
  }
}