import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreinadoresComponent } from './treinadores/treinadores.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TreinadorDetailComponent } from '@angular/cli/bin/angular-pokemon-league/src/app/treinadores-detail/treinadores-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'treinador', component: TreinadoresComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TreinadorDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
