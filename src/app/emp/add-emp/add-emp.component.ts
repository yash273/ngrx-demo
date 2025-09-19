import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpService } from '../emp.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.scss'
})
export class AddEmpComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly empService = inject(EmpService);
  public employee = { id: 0, name: '', position: '' };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Editing employee with ID:', id);
    // Fetch employee details using the id if needed
    if(id) {
      this.empService.getEmployeeById(+id).subscribe(emp => {
        if(emp) {
          this.employee = emp;
          console.log('Employee details:', emp);
          // Populate form fields with employee details
        } else {
          console.log('Employee not found');
        }
      });
    }
  }

saveEmployee() {
    if(this.employee.name && this.employee.position) {
      this.empService.addEmployee(this.employee);
      console.log('Employee saved:', this.employee);
      // Optionally, navigate back to the employee list or show a success message
    } else {
      console.log('Please fill in all required fields');
    }
  }
}
