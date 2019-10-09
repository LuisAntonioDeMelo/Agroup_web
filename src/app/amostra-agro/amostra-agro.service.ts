import { Injectable } from '@angular/core';
import { ObservedValuesFromArray, Observable } from 'rxjs';
import { Agro } from './agro.model';
import { HttpClient } from '@angular/common/http';
import { url, headers } from '../util/util';

@Injectable({
  providedIn: 'root'
})

export class AmostraAgroService {

    constructor(private http:HttpClient) {}
  
     public obterDados():Observable<Agro> {
        return this.http.get<Agro>(`${url}/agro/1`,{headers})
  }

}
