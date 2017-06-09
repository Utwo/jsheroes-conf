import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'},
  {path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
  {path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersModule'},
  {path: 'talk/:name', loadChildren: './talk/talk.module#TalkModule'},
  {path: '404', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: '404'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
