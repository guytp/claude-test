import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  getHelloWorld(): Observable<string> {
    return this.http.get(this.configService.getApiUrl('HelloWorld'), { responseType: 'text' });
  }
}
