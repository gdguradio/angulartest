import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
const routes : Routes = [
    {path:'', component: HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path : 'hello', component:HelloComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,LoginComponent,AdminComponent,HomeComponent,HelloComponent]