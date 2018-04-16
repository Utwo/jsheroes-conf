import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'},
  {path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
  {path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersModule'},
  {path: 'talk/:name', loadChildren: './talk/talk.module#TalkModule'},
  {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
