import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tariffs } from '../interfaces/tariffs';

@Injectable()
export class ApiService {
  private _configUrl = 'assets/config/config.json';

  constructor(private readonly http: HttpClient) { }

  public getTariffsList() {
    return this.http.get<Tariffs>(this._configUrl);
  }
}
