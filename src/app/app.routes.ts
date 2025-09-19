import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/emp/emp-list/emp-list.component').then(m => m.EmpListComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('../app/emp/add-emp/add-emp.component').then(m => m.AddEmpComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('../app/emp/add-emp/add-emp.component').then(m => m.AddEmpComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('../app/product/product-list/product-list.component').then(m => m.ProductListComponent)
    },
    {
        path: 'counter',
        loadComponent: () => import('../app/counter/counter.component').then(m => m.CounterComponent)
    }
];
