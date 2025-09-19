import { Component, inject } from '@angular/core';
import { EmpService } from '../emp.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  imports: [CommonModule],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.scss'
})
export class EmpListComponent {

  private readonly empService = inject(EmpService);
  private readonly router = inject(Router);

  employees$ = this.empService.getEmployees();

  addEmployee() {
    // Logic to add a new employee
    this.empService.addEmployee({ id: 0, name: 'New Employee', position: 'New Position' });
  }

  editEmployee(employeeId: number) {
    // Logic to edit an existing employee
    console.log('Edit employee', employeeId);
    this.router.navigate(['/edit', employeeId]);
  }

  deleteEmployee(employeeId: number) {
    // Logic to delete an employee
    console.log('Delete employee with ID', employeeId);
  }

}
