import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

//var apiUrl = 'http://localhost:8100/';
var apiUrl = 'http://127.0.0.1:8000';

var httpLink = {
  getAllEmployee: apiUrl + '/api/employee/getAllEmployee',
  deleteEmployeeById: apiUrl + '/api/employee/deleteEmployeeById',
  getEmployeeDetailById: apiUrl + '/api/employee/getEmployeeDetailById',
  saveEmployee: apiUrl + '/api/employee/saveEmployee',
};

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) {}

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }
  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(
      httpLink.deleteEmployeeById + '/' + model,''
    );
  }
  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(
      //httpLink.getEmployeeDetailById + '?employeeId=' + model
      httpLink.getEmployeeDetailById + '/' + model
    );
  }
  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }
}
