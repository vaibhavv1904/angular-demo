import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {catchError} from "rxjs/operators";
import { Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employee1.json";
  
  constructor(private http: HttpClient) { }

  getemployees(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url)
            .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error.error.message ||"Server Error");
    
  }
}
