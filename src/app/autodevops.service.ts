import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BuildDetails } from './common/BuildDetails';

@Injectable()
export class AutodevopsService {

  constructor(private httpClient: HttpClient) { }

  public build(buildDetails: BuildDetails): Observable<any> {
    console.log(buildDetails);
    return this.httpClient.post<any>(
      'http://localhost:8090/build', buildDetails);
  }

}
