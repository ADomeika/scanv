import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseObject } from '../shared/models/responseObject';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>('./assets/scan.json');
  }
}
