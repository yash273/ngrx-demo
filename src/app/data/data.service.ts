import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  employees : Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },
    { id: 3, name: 'Sam Johnson', position: 'Manager' }
  ];
}
