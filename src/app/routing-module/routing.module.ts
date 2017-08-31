import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CalendarViewComponent} from '../calendar-view/calendar-view.component/calendar-view.component';
import {TaskListViewComponent} from '../task-list-view/task-list-view.component/task-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar',  component: CalendarViewComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'task-list',     component: TaskListViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
