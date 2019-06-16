import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TalkComponent } from './talk/talk.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpeakerComponent } from './speakers/speaker/speaker.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'speakers/:name', component: SpeakerComponent},
  {path: 'talk/:name', component: TalkComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
