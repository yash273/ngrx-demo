import { inject, Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private readonly dataService = inject(DataService);

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.dataService.employees);
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.dataService.employees.find(emp => emp.id === id);
    return of(employee);
  }

  addEmployee(employee: Employee): void {
    // generate a new id
    employee.id = this.dataService.employees.length > 0 ? Math.max(...this.dataService.employees.map(emp => emp.id)) + 1 : 1;
    // add to the list
    const newEmployee: Employee = {
      id: employee.id ?? 0, 
      name: employee.name ?? '',
      position: employee.position ?? ''
    };
    this.dataService.employees.push(newEmployee);
  }
}
