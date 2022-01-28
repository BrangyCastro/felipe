import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {UIPeaje} from './model/peaje'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public getPeajes(): Observable<UIPeaje> {
     const url = 'https://apps-eus-ties-be-dev.azurewebsites.net/v1/Peajes'
        return this.httpClient.get<UIPeaje>(url);
    }
}
