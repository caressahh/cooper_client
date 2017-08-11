import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

/*
  Generated class for the PerfomanceDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PerfomanceDataProvider {

  constructor(private _tokenService: Angular2TokenService) {}

    saveData(data) {
      return this._tokenService.post('performance_data', data).map(data => data);
    }
    getResults() {
    return this._tokenService
      .get('performance_data')
      .map(results => results.json());
    }
  }
