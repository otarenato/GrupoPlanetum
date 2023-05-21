import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/component';
import { AuthGuard } from './guards/auth-guard';
import { InspectionsComponent } from './inspections/component/inspections.component';
import { FormInspectionComponent } from './inspections/form-inspection/form-inspection.component';
import { FormComponent } from './reports/form/form.component';
import { ListComponent } from './reports/list/list.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'inspections/list', component: InspectionsComponent, canActivate: [AuthGuard] },
  { path: 'inspections/create', component: FormInspectionComponent, canActivate: [AuthGuard] },
  { path: 'inspections/edit', component: FormInspectionComponent, canActivate: [AuthGuard] },
  { path: 'reports/list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'reports/create', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'reports/edit', component: FormComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
