import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GoalDetailsComponent } from '../goal-details/goal-details.component';
import { GoalComponent } from '../goal/goal.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';


// Defined Routes
const routes: Routes = [
  { path: "goals", component: GoalComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/goals", pathMatch: "full" },
  { path: 'goals/:id', component: GoalDetailsComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }